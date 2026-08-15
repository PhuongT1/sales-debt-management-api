import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Public } from './public.decorator';

export const PublicApi = () => applyDecorators(Public());

export const ProtectedApi = () =>
  applyDecorators(
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Thiếu token hoặc token không hợp lệ.' }),
  );
