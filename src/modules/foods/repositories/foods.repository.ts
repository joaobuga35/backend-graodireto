import { CreateFoodDto } from '../dto/create-food.dto';
import { Food } from '../entities/food.entity';

export abstract class FoodsRepository {
  abstract create(data: CreateFoodDto): Promise<Food> | Food;
}
