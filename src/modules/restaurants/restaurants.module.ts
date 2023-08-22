import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { PrismaService } from 'src/database/prisma.service';
import { RestaurantsRepository } from './repositories/restaurants.repository';
import { RestaurantsPrismaRepository } from './repositories/prisma/restaurants.repository.prisma';

@Module({
  controllers: [RestaurantsController],
  providers: [
    RestaurantsService,
    PrismaService,
    { provide: RestaurantsRepository, useClass: RestaurantsPrismaRepository },
  ],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
