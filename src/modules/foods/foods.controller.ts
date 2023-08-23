import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Patch,
  HttpCode,
  Delete,
} from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateFoodDto } from './dto/update-food.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Foods')
@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Food created successfully',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Wed Aug 23 2023 04:09:23 GMT-0300 (Horário Padrão de Brasília)',
          id: '072299eb-befc-411e-b6f0-566065bc2dc6',
          name: 'Arroz com filé mignon',
          description: 'O melhor mignon',
          image:
            'https://1.bp.blogspot.com/-wvjKKcHCFqU/VlSCE1-eWaI/AAAAAAAACt0/ysGLpwTrsRg/s1600/1.jpg',
          price: '79.90',
          restaurantId: '1c555f18-d292-4d98-91c9-4e16e1d63125',
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Food created successfully',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Wed Aug 23 2023 04:09:23 GMT-0300 (Horário Padrão de Brasília)',
          id: '072299eb-befc-411e-b6f0-566065bc2dc6',
          name: 'Arroz com filé mignon',
          description: 'O melhor mignon',
          image:
            'https://1.bp.blogspot.com/-wvjKKcHCFqU/VlSCE1-eWaI/AAAAAAAACt0/ysGLpwTrsRg/s1600/1.jpg',
          price: '79.90',
          restaurantId: '1c555f18-d292-4d98-91c9-4e16e1d63125',
        },
      },
    },
  })
  findAll() {
    return this.foodsService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Food created successfully',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Wed Aug 23 2023 04:09:23 GMT-0300 (Horário Padrão de Brasília)',
          id: '072299eb-befc-411e-b6f0-566065bc2dc6',
          name: 'Arroz com filé mignon',
          description: 'O melhor mignon',
          image:
            'https://1.bp.blogspot.com/-wvjKKcHCFqU/VlSCE1-eWaI/AAAAAAAACt0/ysGLpwTrsRg/s1600/1.jpg',
          price: '79.90',
          restaurantId: '1c555f18-d292-4d98-91c9-4e16e1d63125',
        },
      },
    },
  })
  findOne(@Param('id') id: string) {
    return this.foodsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Food created successfully',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Wed Aug 23 2023 04:09:23 GMT-0300 (Horário Padrão de Brasília)',
          id: '072299eb-befc-411e-b6f0-566065bc2dc6',
          name: 'Arroz com filé mignon',
          description: 'O melhor mignon',
          image:
            'https://1.bp.blogspot.com/-wvjKKcHCFqU/VlSCE1-eWaI/AAAAAAAACt0/ysGLpwTrsRg/s1600/1.jpg',
          price: '79.90',
          restaurantId: '1c555f18-d292-4d98-91c9-4e16e1d63125',
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodsService.update(id, updateFoodDto);
  }

  @HttpCode(204)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodsService.delete(id);
  }
}
