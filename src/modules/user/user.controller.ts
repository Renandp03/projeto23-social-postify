import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: CreateUserDTO) : any {
    return this.userService.createUser(user);
  }

  @Get()
  find() {
    return this.userService.findAllUsers();
  }
}
