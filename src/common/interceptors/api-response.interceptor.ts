import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request, Response } from 'express';
import { map, type Observable } from 'rxjs';
import { SKIP_API_RESPONSE_KEY } from '@common/decorators/api-response.decorator';
import type { ApiSuccessResponse, PaginationMeta } from '@common/http/api-response.types';
import { isPaginatedResult, type PaginatedResult } from '@common/utils/pagination.util';

@Injectable()
export class ApiResponseInterceptor<T> implements NestInterceptor<
  T,
  ApiSuccessResponse<unknown> | undefined
> {
  constructor(private readonly reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiSuccessResponse<unknown> | undefined> {
    const skipResponse = this.reflector.getAllAndOverride<boolean>(SKIP_API_RESPONSE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (skipResponse) {
      return next.handle() as Observable<undefined>;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();

    return next.handle().pipe(
      map((result) => {
        if (response.statusCode === HttpStatus.NO_CONTENT) {
          return undefined;
        }

        if (isPaginatedResult(result)) {
          return this.createResponse(
            result.items,
            response.statusCode,
            request.originalUrl,
            this.createPaginationMeta(result),
          );
        }

        return this.createResponse(result ?? null, response.statusCode, request.originalUrl);
      }),
    );
  }

  private createResponse<Data>(
    data: Data,
    statusCode: number,
    path: string,
    pagination?: PaginationMeta,
  ): ApiSuccessResponse<Data> {
    return {
      success: true,
      statusCode,
      code: statusCode === HttpStatus.CREATED ? 'RESOURCE_CREATED' : 'SUCCESS',
      message:
        statusCode === HttpStatus.CREATED
          ? 'Resource created successfully.'
          : 'Request completed successfully.',
      data,
      ...(pagination ? { meta: { pagination } } : {}),
      timestamp: new Date().toISOString(),
      path,
    };
  }

  private createPaginationMeta(result: PaginatedResult<unknown>): PaginationMeta {
    const totalPages = Math.ceil(result.total / result.pageSize);

    return {
      page: result.page,
      pageSize: result.pageSize,
      total: result.total,
      totalPages,
      hasNextPage: result.page < totalPages,
      hasPreviousPage: result.page > 1,
    };
  }
}
