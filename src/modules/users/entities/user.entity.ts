import { Exclude } from 'class-transformer';

export class Address {
  zipCode: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export class User {
  readonly id: string;
  name: string;
  email: string;

  @Exclude()
  password: string;

  admin: boolean;
  Address: Address;
  createdAt: string;

  constructor() {
    this.createdAt = String(new Date());
  }
}
