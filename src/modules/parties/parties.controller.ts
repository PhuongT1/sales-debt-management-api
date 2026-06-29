import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { PartiesService } from "./parties.service";
import { CreatePartyDto } from "./dto/create-party.dto";
import { QueryPartiesDto } from "./dto/query-parties.dto";
import { UpdatePartyDto } from "./dto/update-party.dto";

@Controller("parties")
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}

  @Get()
  list(@Query() query: QueryPartiesDto) {
    return this.partiesService.list(query);
  }

  @Post()
  create(@Body() body: CreatePartyDto) {
    return this.partiesService.create(body);
  }

  @Get(":id")
  detail(@Param("id") id: string) {
    return this.partiesService.detail(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body: UpdatePartyDto) {
    return this.partiesService.update(id, body);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.partiesService.deactivate(id);
  }
}
