export class Address {
  zipCode: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export class Restaurant {
  readonly id: number;
  name: string;
  phone: string;
  address: Address;
  readonly createdAt: string;

  constructor() {
    this.createdAt = String(new Date());
  }
}
