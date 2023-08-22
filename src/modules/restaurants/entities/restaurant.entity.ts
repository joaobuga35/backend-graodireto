export class Address {
  zipCode: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export class Restaurant {
  readonly id: string;
  name: string;
  phone: string;
  image: string;
  address: Address;
  readonly createdAt: string;

  constructor() {
    this.createdAt = String(new Date());
  }
}
