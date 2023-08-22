import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { FoodsRepository } from './repositories/foods.repository';

@Injectable()
export class FoodsService {
  constructor(private foodRepository: FoodsRepository) {}
  async create(createFoodDto: CreateFoodDto) {
    const newFood = await this.foodRepository.create(createFoodDto);
    return newFood;
  }
}
