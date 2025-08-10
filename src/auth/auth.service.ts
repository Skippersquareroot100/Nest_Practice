import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  isAuthenticated: Boolean = false;

  login(email: string, password: string) {
    const user = this.usersService.users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      this.isAuthenticated = true;
      console.log('Login successful:', user);
      return {
        message: 'Login successful',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    }

    return { message: 'Login failed' };
  }
}
