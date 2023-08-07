import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: '123',
      username: 'john',
      age: 20,
    },
    {
      id: '321',
      username: 'mark',
      age: 32,
    },
  ];

  findAll() {
    return this.users;
  }
}
