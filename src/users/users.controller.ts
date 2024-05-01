import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.user({ id: Number(id) });
  }
  @Post()
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.usersService.createUser(userData);
  }
}
