import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }
}
