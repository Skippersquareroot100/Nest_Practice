import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  users: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
    password: string;
  }[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'male',
      isMarried: false,
      password: '123',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      gender: 'female',
      isMarried: true,
      password: '123',
    },
    {
      id: 3,
      name: 'Jane Doe',
      email: 'jane@example.com',
      gender: 'female',
      isMarried: true,
      password: '123',
    },
  ];

  getAllUsers(): any[] | string {
  if (this.authService.isAuthenticated) {
    return this.users;
  } else {
    return 'not logged in';
  }
}

  getUserById(id: number): any {
    return this.users.find((user) => user.id === id);
  }
  createUser(user: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
    password: string;
  }) {
    this.users.push(user);
  }
}
