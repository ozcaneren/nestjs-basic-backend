import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'users';
  }
  @Get(':id')
  getOne(@Param('id') id) {
    return `this id ${id}`;
  }

  @Post()
  create(@Body() allProps: CreatePersonDto) {
    return `User created: Username is ${allProps.username}`;
  }
}
