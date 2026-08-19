export type PaginationMeta = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type ApiSuccessResponse<T> = {
  success: true;
  statusCode: number;
  code: string;
  message: string;
  data: T;
  meta?: {
    pagination: PaginationMeta;
  };
  timestamp: string;
  path: string;
};

export type ApiErrorDetail = {
  field?: string;
  code: string;
  message: string;
};

export type ApiErrorResponse = {
  success: false;
  statusCode: number;
  code: string;
  message: string;
  errors?: ApiErrorDetail[];
  timestamp: string;
  path: string;
};
