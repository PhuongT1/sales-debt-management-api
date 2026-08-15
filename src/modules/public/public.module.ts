import { Module } from '@nestjs/common';
import { PublicAuthModule } from './auth/auth.module';

@Module({
  imports: [PublicAuthModule],
})
export class PublicModule {}
