import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { DebtType } from '@generated/prisma';

export class CreateDebtDto {
  @IsEnum(DebtType)
  type!: DebtType;

  @IsString()
  @IsNotEmpty()
  partyId!: string;

  @IsOptional()
  @IsString()
  assignedToId?: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsString()
  invoiceNo?: string;

  @IsOptional()
  @IsString()
  orderNo?: string;

  @IsOptional()
  @IsString()
  contractNo?: string;

  @IsOptional()
  @IsString()
  poNo?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumberString()
  originalAmount!: string;

  @IsDateString()
  issueDate!: string;

  @IsDateString()
  dueDate!: string;

  @IsOptional()
  @IsDateString()
  nextFollowUpAt?: string;

  @IsOptional()
  @IsString()
  followUpNote?: string;
}
