import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { User } from './schemas/users.schema';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() allProps: CreatePersonDto): Promise<User> {
    return this.usersService.create(allProps);
  }

  @Put(':id')
  update(@Param('id') id, @Body() allProps: CreatePersonDto): Promise<User> {
    return this.usersService.update(id, allProps);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<User> {
    return this.usersService.remove(id);
  }
}
