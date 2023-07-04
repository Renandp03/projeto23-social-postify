import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUser: createUser) : void {
    
  }
}


type createUser = {
  name: string,
  email: string,
  password: string,
  avatar: string
}