import { Body, Controller, Delete, Get, Param, Patch, Query } from '@nestjs/common';
import { ProtectedApi } from '@auth/auth-api.decorator';
import { Roles } from '@auth/roles.decorator';
import { UserRole } from '@generated/prisma';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUsersDto } from './dto/query-users.dto';
import { UsersService } from './users.service';

@ProtectedApi()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('options')
  options() {
    return this.usersService.options();
  }

  @Get()
  list(@Query() query: QueryUsersDto) {
    return this.usersService.list(query);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  deactivate(@Param('id') id: string) {
    return this.usersService.deactivate(id);
  }
}
