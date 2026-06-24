import { Body, Controller, Delete, Get, Param, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  list() {
    return this.usersService.list();
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body: Record<string, unknown>) {
    return this.usersService.update(id, body);
  }

  @Delete(":id")
  deactivate(@Param("id") id: string) {
    return this.usersService.deactivate(id);
  }
}
