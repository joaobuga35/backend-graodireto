import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FoodsRepository } from '../foods.repository';
import { CreateFoodDto } from '../../dto/create-food.dto';
import { Food } from '../../entities/food.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class FoodsPrismaRepository implements FoodsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateFoodDto): Promise<Food> {
    const food = new Food();
    Object.assign(food, { ...data });

    const newFood = await this.prisma.food.create({ data: { ...food } });

    return plainToInstance(Food, newFood);
  }
}
