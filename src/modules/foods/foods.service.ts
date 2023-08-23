import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { FoodsRepository } from './repositories/foods.repository';
import { UpdateFoodDto } from './dto/update-food.dto';

@Injectable()
export class FoodsService {
  constructor(private foodRepository: FoodsRepository) {}
  async create(createFoodDto: CreateFoodDto) {
    const newFood = await this.foodRepository.create(createFoodDto);
    return newFood;
  }

  async findAll() {
    const allFoods = await this.foodRepository.findAll();

    return allFoods;
  }

  async findOne(id: string) {
    const oneFood = await this.foodRepository.findOne(id);

    if (!oneFood) {
      throw new NotFoundException('This food does not exist');
    }

    return oneFood;
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    const oneFood = await this.foodRepository.findOne(id);

    if (!oneFood) {
      throw new NotFoundException('This food does not exist');
    }
    const updatedFood = await this.foodRepository.update(id, updateFoodDto);

    return updatedFood;
  }

  async delete(id: string) {
    const oneFood = await this.foodRepository.findOne(id);

    if (!oneFood) {
      throw new NotFoundException('This food does not exist');
    }
    await this.foodRepository.delete(id);
  }
}
