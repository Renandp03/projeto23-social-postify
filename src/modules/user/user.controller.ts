import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './entity/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User) : void {
    this.userService.createUser(user);
  }

  @Get()
  find() : User[] {
    return this.userService.findAllUsers();
  }
}
