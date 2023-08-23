import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';
import { Restaurant } from '../entities/restaurant.entity';

export abstract class RestaurantsRepository {
  abstract create(data: CreateRestaurantDto): Promise<Restaurant> | Restaurant;
  abstract findAll(): Promise<Restaurant[]> | Restaurant[];
  abstract findOne(id: string): Promise<Restaurant> | Restaurant;
  abstract update(
    id: string,
    data: UpdateRestaurantDto,
  ): Promise<Restaurant> | Restaurant;
  abstract delete(id: string): Promise<void> | void;
}
