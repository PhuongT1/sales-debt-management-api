import { IsEnum, IsIn, IsOptional, IsString } from "class-validator";
import { PaginationQueryDto } from "../../../common/dto/pagination-query.dto";
import { PartyType } from "../../../generated/prisma";

export class QueryPartiesDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  q?: string;

  @IsOptional()
  @IsEnum(PartyType)
  type?: PartyType;

  @IsOptional()
  @IsString()
  assignedToId?: string;

  @IsOptional()
  @IsIn(["today", "last_7_days", "this_month"])
  createdRange?: "today" | "last_7_days" | "this_month";
}
