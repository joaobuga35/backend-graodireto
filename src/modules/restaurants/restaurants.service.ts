import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantsRepository } from './repositories/restaurants.repository';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

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

    if (!restaurant) {
      throw new NotFoundException('This restaurant does not exist');
    }

    return restaurant;
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    const restaurant = await this.restaurantRepository.findOne(id);

    if (!restaurant) {
      throw new NotFoundException('This restaurant does not exist');
    }

    const updatedRestaurant = await this.restaurantRepository.update(
      id,
      updateRestaurantDto,
    );

    return updatedRestaurant;
  }

  async remove(id: string) {
    const restaurant = await this.restaurantRepository.findOne(id);

    if (!restaurant) {
      throw new NotFoundException('This restaurant does not exist');
    }
    return await this.restaurantRepository.delete(id);
  }
}
