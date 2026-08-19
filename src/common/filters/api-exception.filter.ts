import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { Prisma } from '@generated/prisma';
import type { ApiErrorDetail, ApiErrorResponse } from '@common/http/api-response.types';

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
export class ApiExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(ApiExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const request = http.getRequest<Request>();
    const response = http.getResponse<Response>();
    const error = this.normalizeException(exception);
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

  private normalizeException(exception: unknown): NormalizedError {
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      return this.normalizePrismaError(exception);
    }

    if (exception instanceof HttpException) {
      return this.normalizeHttpException(exception);
    }

    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred.',
    };
  }

  private normalizeHttpException(exception: HttpException): NormalizedError {
    const statusCode = exception.getStatus();
    const response = exception.getResponse();
    const payload = typeof response === 'object' ? (response as ExceptionPayload) : undefined;
    const message = this.extractMessage(payload?.message ?? response, exception.message);

    return {
      statusCode,
      code: typeof payload?.code === 'string' ? payload.code : this.defaultCode(statusCode),
      message,
      errors: this.extractErrors(payload?.errors),
    };
  }

  private normalizePrismaError(error: Prisma.PrismaClientKnownRequestError): NormalizedError {
    if (error.code === 'P2002') {
      const fields = Array.isArray(error.meta?.target) ? error.meta.target.map(String) : [];
      const message = fields.includes('code')
        ? 'Mã này đã tồn tại. Vui lòng nhập mã khác hoặc để trống.'
        : fields.includes('email')
          ? 'Email này đã tồn tại.'
          : 'Dữ liệu bị trùng. Vui lòng kiểm tra lại.';

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
        message: 'Không tìm thấy dữ liệu yêu cầu.',
      };
    }

    if (error.code === 'P2003') {
      return {
        statusCode: HttpStatus.CONFLICT,
        code: 'RELATION_CONFLICT',
        message: 'Không thể thay đổi dữ liệu vì đang có dữ liệu liên quan.',
      };
    }

    return {
      statusCode: HttpStatus.BAD_REQUEST,
      code: 'DATABASE_REQUEST_ERROR',
      message: 'Không thể xử lý dữ liệu. Vui lòng kiểm tra lại.',
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
