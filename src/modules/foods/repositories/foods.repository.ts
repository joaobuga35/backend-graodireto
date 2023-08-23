import { CreateFoodDto } from '../dto/create-food.dto';
import { UpdateFoodDto } from '../dto/update-food.dto';
import { Food } from '../entities/food.entity';

export abstract class FoodsRepository {
  abstract create(data: CreateFoodDto): Promise<Food> | Food;
  abstract findAll(): Promise<Food[]> | Food[];
  abstract findOne(id: string): Promise<Food> | Food;
  abstract update(id: string, data: UpdateFoodDto): Promise<Food> | Food;
  abstract delete(id: string): Promise<void> | void;
}
