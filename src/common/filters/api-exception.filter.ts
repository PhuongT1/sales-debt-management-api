import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { Prisma } from '@generated/prisma';
import type { ApiErrorDetail, ApiErrorResponse } from '@common/http/api-response.types';
import { I18nService } from '@common/i18n/i18n.service';
import type { AppLocale } from '@common/i18n/i18n.types';

type ExceptionPayload = {
  code?: unknown;
  message?: unknown;
  errors?: unknown;
};

type NormalizedError = {
  statusCode: number;
  code: string;
  message: string;
  errors?: ApiErrorDetail[];
};

@Catch()
@Injectable()
export class ApiExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(ApiExceptionFilter.name);

  constructor(private readonly i18n: I18nService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const request = http.getRequest<Request>();
    const response = http.getResponse<Response>();
    const locale = this.i18n.resolveLocale(request);
    const error = this.normalizeException(exception, locale);

    const body: ApiErrorResponse = {
      success: false,
      statusCode: error.statusCode,
      code: error.code,
      message: error.message,
      ...(error.errors?.length ? { errors: error.errors } : {}),
      timestamp: new Date().toISOString(),
      path: request.originalUrl,
    };

    if (error.statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
      const stack = exception instanceof Error ? exception.stack : String(exception);
      this.logger.error(`${request.method} ${request.originalUrl}`, stack);
    }

    response.status(error.statusCode).json(body);
  }

  private normalizeException(exception: unknown, locale: AppLocale): NormalizedError {
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      return this.normalizePrismaError(exception, locale);
    }

    if (exception instanceof HttpException) {
      return this.normalizeHttpException(exception, locale);
    }

    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'INTERNAL_SERVER_ERROR',
      message: this.i18n.t('errors.INTERNAL_SERVER_ERROR', locale),
    };
  }

  private normalizeHttpException(exception: HttpException, locale: AppLocale): NormalizedError {
    const statusCode = exception.getStatus();
    const response = exception.getResponse();
    const payload = typeof response === 'object' ? (response as ExceptionPayload) : undefined;
    const rawCode = typeof payload?.code === 'string' ? payload.code : this.defaultCode(statusCode);
    const rawMessage = this.extractMessage(payload?.message ?? response, exception.message);

    // Attempt to translate by key or standard code
    let localizedMessage = rawMessage;
    if (rawMessage.includes('.')) {
      localizedMessage = this.i18n.t(rawMessage, locale);
    } else {
      const byCode = this.i18n.t(`errors.${rawCode}`, locale);
      if (byCode !== `errors.${rawCode}`) {
        localizedMessage = byCode;
      } else {
        const byAuth = this.i18n.t(`auth.${rawCode}`, locale);
        if (byAuth !== `auth.${rawCode}`) {
          localizedMessage = byAuth;
        }
      }
    }

    return {
      statusCode,
      code: rawCode,
      message: localizedMessage,
      errors: this.extractErrors(payload?.errors),
    };
  }

  private normalizePrismaError(
    error: Prisma.PrismaClientKnownRequestError,
    locale: AppLocale,
  ): NormalizedError {
    if (error.code === 'P2002') {
      const fields = Array.isArray(error.meta?.target) ? error.meta.target.map(String) : [];
      const message = fields.includes('code')
        ? this.i18n.t('errors.CODE_EXISTS', locale)
        : fields.includes('email')
          ? this.i18n.t('errors.EMAIL_EXISTS', locale)
          : this.i18n.t('errors.RESOURCE_CONFLICT', locale);

      return {
        statusCode: HttpStatus.CONFLICT,
        code: 'RESOURCE_CONFLICT',
        message,
      };
    }

    if (error.code === 'P2025') {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        code: 'RESOURCE_NOT_FOUND',
        message: this.i18n.t('errors.RESOURCE_NOT_FOUND', locale),
      };
    }

    if (error.code === 'P2003') {
      return {
        statusCode: HttpStatus.CONFLICT,
        code: 'RELATION_CONFLICT',
        message: this.i18n.t('errors.RELATION_CONFLICT', locale),
      };
    }

    return {
      statusCode: HttpStatus.BAD_REQUEST,
      code: 'DATABASE_REQUEST_ERROR',
      message: this.i18n.t('errors.DATABASE_REQUEST_ERROR', locale),
    };
  }

  private extractMessage(value: unknown, fallback: string): string {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const firstMessage = value.find((item): item is string => typeof item === 'string');
      return firstMessage ?? fallback;
    }

    return fallback;
  }

  private extractErrors(value: unknown): ApiErrorDetail[] | undefined {
    if (!Array.isArray(value)) {
      return undefined;
    }

    return value.filter((item): item is ApiErrorDetail => {
      if (!item || typeof item !== 'object') return false;
      const error = item as Partial<ApiErrorDetail>;
      return typeof error.code === 'string' && typeof error.message === 'string';
    });
  }

  private defaultCode(statusCode: number): string {
    const codes: Partial<Record<number, string>> = {
      [HttpStatus.BAD_REQUEST]: 'BAD_REQUEST',
      [HttpStatus.UNAUTHORIZED]: 'UNAUTHORIZED',
      [HttpStatus.FORBIDDEN]: 'FORBIDDEN',
      [HttpStatus.NOT_FOUND]: 'NOT_FOUND',
      [HttpStatus.CONFLICT]: 'CONFLICT',
      [HttpStatus.UNPROCESSABLE_ENTITY]: 'UNPROCESSABLE_ENTITY',
      [HttpStatus.TOO_MANY_REQUESTS]: 'TOO_MANY_REQUESTS',
    };

    return codes[statusCode] ?? 'REQUEST_FAILED';
  }
}
