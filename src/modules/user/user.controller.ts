import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User) : any {
    return this.userService.createUser(user);
  }

  @Get()
  find() {
    return this.userService.findAllUsers();
  }
}
