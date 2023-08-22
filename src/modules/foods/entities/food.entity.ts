export class Food {
  readonly id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  restaurantId: string;
  readonly createdAt: string;

  constructor() {
    this.createdAt = String(new Date());
  }
}
