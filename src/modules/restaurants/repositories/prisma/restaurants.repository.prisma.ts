import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RestaurantsRepository } from '../restaurants.repository';
import { CreateRestaurantDto } from '../../dto/create-restaurant.dto';
import { Restaurant } from '../../entities/restaurant.entity';
import { UpdateRestaurantDto } from '../../dto/update-restaurant.dto';

@Injectable()
export class RestaurantsPrismaRepository implements RestaurantsRepository {
  constructor(private prisma: PrismaService) {}
  create(data: CreateRestaurantDto): Promise<Restaurant> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Restaurant[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<Restaurant> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateRestaurantDto): Promise<Restaurant> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
}
