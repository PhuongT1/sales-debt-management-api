import { Controller, Post } from '@nestjs/common';
import { ProtectedApi } from '@auth/auth-api.decorator';

@ProtectedApi()
@Controller('imports')
export class ImportsController {
  @Post('debts')
  debts() {
    return {
      message:
        'Import Excel endpoint scaffolded. Port parser from web src/features/imports before enabling production import.',
    };
  }
}
