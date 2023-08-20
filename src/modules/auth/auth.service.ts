import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      const matchPassword = await compare(password, user.password);
      if (matchPassword) {
        const { email } = user;
        return { email };
      }
    }
    return null;
  }

  async login(email: string) {
    const user = await this.usersService.findByEmail(email);

    return {
      token: this.jwtService.sign({ email }, { subject: user.id }),
    };
  }
}
