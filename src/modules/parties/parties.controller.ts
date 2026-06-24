import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { PartiesService } from "./parties.service";

@Controller("parties")
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}

  @Get()
  list(@Query() query: Record<string, string | undefined>) {
    return this.partiesService.list(query);
  }

  @Post()
  create(@Body() body: Record<string, unknown>) {
    return this.partiesService.create(body);
  }

  @Get(":id")
  detail(@Param("id") id: string) {
    return this.partiesService.detail(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body: Record<string, unknown>) {
    return this.partiesService.update(id, body);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.partiesService.deactivate(id);
  }
}
