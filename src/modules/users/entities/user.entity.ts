import { Exclude } from 'class-transformer';

export class User {
  readonly id: string;
  name: string;
  email: string;

  @Exclude()
  password: string;

  admin: boolean;
  createdAt: string;

  constructor() {
    this.createdAt = String(new Date());
  }
}
