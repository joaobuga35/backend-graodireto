import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantsRepository } from './repositories/restaurants.repository';

@Injectable()
export class RestaurantsService {
  constructor(private restaurantRepository: RestaurantsRepository) {}
  async create(createRestaurantDto: CreateRestaurantDto) {
    const newRestaurant =
      await this.restaurantRepository.create(createRestaurantDto);

    return newRestaurant;
  }

  async findAll() {
    const allRestaurants = await this.restaurantRepository.findAll();
    return allRestaurants;
  }

  async findOne(id: string) {
    const restaurant = await this.restaurantRepository.findOne(id);
    return restaurant;
  }

  // update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
  //   return `This action updates a #${id} restaurant`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} restaurant`;
  // }
}
