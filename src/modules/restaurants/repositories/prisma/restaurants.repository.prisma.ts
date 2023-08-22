import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RestaurantsRepository } from '../restaurants.repository';
import { CreateRestaurantDto } from '../../dto/create-restaurant.dto';
import { Restaurant } from '../../entities/restaurant.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class RestaurantsPrismaRepository implements RestaurantsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateRestaurantDto): Promise<Restaurant> {
    const { address, ...others } = data;
    const restaurant = new Restaurant();
    Object.assign(restaurant, { ...others });

    const newRestaurant = await this.prisma.restaurant.create({
      data: {
        ...restaurant,
        Address: {
          create: { ...address },
        },
      },
      include: {
        Address: {
          select: {
            id: false,
            zipCode: true,
            state: true,
            city: true,
            street: true,
            number: true,
            complement: true,
          },
        },
      },
    });

    return plainToInstance(Restaurant, newRestaurant);
  }
  async findAll(): Promise<Restaurant[]> {
    const allRestaurants = await this.prisma.restaurant.findMany({
      include: {
        Address: {
          select: {
            id: false,
            zipCode: true,
            state: true,
            city: true,
            street: true,
            number: true,
            complement: true,
          },
        },
        foods: true,
      },
    });

    return plainToInstance(Restaurant, allRestaurants);
  }
  async findOne(id: string): Promise<Restaurant> {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id: id },
      include: {
        Address: {
          select: {
            id: false,
            zipCode: true,
            state: true,
            city: true,
            street: true,
            number: true,
            complement: true,
          },
        },
        foods: true,
      },
    });

    return plainToInstance(Restaurant, restaurant);
  }
  // update(id: string, data: UpdateRestaurantDto): Promise<Restaurant> {
  //   throw new Error('Method not implemented.');
  // }
  // delete(id: string): void | Promise<void> {
  //   throw new Error('Method not implemented.');
  // }
}
