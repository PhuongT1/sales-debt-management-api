import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { CollectionStatus } from '@generated/prisma';

export class UpdateDebtCollectionDto {
  @IsOptional()
  @IsString()
  assignedToId?: string;

  @IsOptional()
  @IsEnum(CollectionStatus)
  collectionStatus?: CollectionStatus;

  @IsOptional()
  @IsDateString()
  nextFollowUpAt?: string;

  @IsOptional()
  @IsString()
  followUpNote?: string;

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
}
