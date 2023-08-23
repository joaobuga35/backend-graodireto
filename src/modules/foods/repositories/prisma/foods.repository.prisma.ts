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

    const newFood = await this.prisma.food.create({
      data: { ...food },
    });

    return plainToInstance(Food, newFood);
  }

  async findAll(): Promise<Food[]> {
    const allFoods = await this.prisma.food.findMany();

    return plainToInstance(Food, allFoods);
  }
  async findOne(id: string): Promise<Food> {
    const oneFood = await this.prisma.food.findUnique({
      where: { id },
    });

    return plainToInstance(Food, oneFood);
  }

  async update(id: string, data: CreateFoodDto): Promise<Food> {
    const updatedFood = await this.prisma.food.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Food, updatedFood);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.food.delete({ where: { id } });
  }
}
