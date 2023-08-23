import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  HttpCode,
  Delete,
  Patch,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Create restaurant is successful.',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Wed Aug 23 2023 14:27:07 GMT-0300 (Horário Padrão de Brasília)',
          id: 'e916d7dc-441e-4149-8fea-1f8b07573b2e',
          name: 'Madero',
          phone: '982448785',
          image:
            'https://master.restaurantemadero.com.br/upload/galeria-foto/82/container-campo-largo-1600x900-03.jpg',
          addressId: '292b7445-f4ba-4b81-9aaa-23cac9b91541',
          Address: {
            zipCode: '1343886',
            state: 'SP',
            city: 'Franca',
            street: 'Av. Major Nicácio',
            number: '1750',
            complement: null,
          },
        },
      },
    },
  })
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Create restaurant is successful.',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Mon Aug 21 2023 23:00:36 GMT-0300 (Horário Padrão de Brasília)',
          id: '1c555f18-d292-4d98-91c9-4e16e1d63125',
          name: 'Restaurante do João',
          phone: '992568475',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JBMD2aElJFh3y7B7qJnmP7f6AcROBT5-6A&usqp=CAU',
          addressId: '84ad74b9-8ad4-4bc1-b783-8f68f35944a7',
          Address: {
            zipCode: '14403986',
            state: 'SP',
            city: 'Franca',
            street: 'Av. Presidente Vargas',
            number: '1250',
            complement: null,
          },
          foods: [
            {
              id: '16fdadc0-493d-430a-91c7-0b5e023512e0',
              name: 'Parmegiana do joão',
              description: 'O melhor prato de parmegiana da cidade',
              image:
                'https://www.estadao.com.br/resizer/fOA6pWPuQg9h0Ep7WtiXgDr6PFE=/720x503/filters:format(jpg):quality(80):focal(775x1125:785x1135)/cloudfront-us-east-1.images.arcpublishing.com/estadao/WSWGR3VNIVEMZEDCZ3DPAQD3BQ.jpg',
              price: '69.90',
              createdAt:
                'Tue Aug 22 2023 00:30:07 GMT-0300 (Horário Padrão de Brasília)',
              restaurantId: '1c555f18-d292-4d98-91c9-4e16e1d63125',
            },
          ],
        },
      },
    },
  })
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Create restaurant is successful.',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Mon Aug 21 2023 23:00:36 GMT-0300 (Horário Padrão de Brasília)',
          id: '1c555f18-d292-4d98-91c9-4e16e1d63125',
          name: 'Restaurante do João',
          phone: '992568475',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JBMD2aElJFh3y7B7qJnmP7f6AcROBT5-6A&usqp=CAU',
          addressId: '84ad74b9-8ad4-4bc1-b783-8f68f35944a7',
          Address: {
            zipCode: '14403986',
            state: 'SP',
            city: 'Franca',
            street: 'Av. Presidente Vargas',
            number: '1250',
            complement: null,
          },
          foods: [
            {
              id: '16fdadc0-493d-430a-91c7-0b5e023512e0',
              name: 'Parmegiana do joão',
              description: 'O melhor prato de parmegiana da cidade',
              image:
                'https://www.estadao.com.br/resizer/fOA6pWPuQg9h0Ep7WtiXgDr6PFE=/720x503/filters:format(jpg):quality(80):focal(775x1125:785x1135)/cloudfront-us-east-1.images.arcpublishing.com/estadao/WSWGR3VNIVEMZEDCZ3DPAQD3BQ.jpg',
              price: '69.90',
              createdAt:
                'Tue Aug 22 2023 00:30:07 GMT-0300 (Horário Padrão de Brasília)',
              restaurantId: '1c555f18-d292-4d98-91c9-4e16e1d63125',
            },
          ],
        },
      },
    },
  })
  findOne(@Param('id') id: string) {
    return this.restaurantsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Create restaurant is successful.',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Mon Aug 21 2023 23:00:36 GMT-0300 (Horário Padrão de Brasília)',
          id: '1c555f18-d292-4d98-91c9-4e16e1d63125',
          name: 'Restaurante do João',
          phone: '992568475',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JBMD2aElJFh3y7B7qJnmP7f6AcROBT5-6A&usqp=CAU',
          addressId: '84ad74b9-8ad4-4bc1-b783-8f68f35944a7',
          Address: {
            zipCode: '14403986',
            state: 'SP',
            city: 'Franca',
            street: 'Av. Presidente Vargas',
            number: '1250',
            complement: null,
          },
          foods: [
            {
              id: '16fdadc0-493d-430a-91c7-0b5e023512e0',
              name: 'Parmegiana do joão',
              description: 'O melhor prato de parmegiana da cidade',
              image:
                'https://www.estadao.com.br/resizer/fOA6pWPuQg9h0Ep7WtiXgDr6PFE=/720x503/filters:format(jpg):quality(80):focal(775x1125:785x1135)/cloudfront-us-east-1.images.arcpublishing.com/estadao/WSWGR3VNIVEMZEDCZ3DPAQD3BQ.jpg',
              price: '69.90',
              createdAt:
                'Tue Aug 22 2023 00:30:07 GMT-0300 (Horário Padrão de Brasília)',
              restaurantId: '1c555f18-d292-4d98-91c9-4e16e1d63125',
            },
          ],
        },
      },
    },
  })
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantsService.update(id, updateRestaurantDto);
  }

  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantsService.remove(id);
  }
}
