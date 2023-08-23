import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { PrismaService } from 'src/database/prisma.service';
import { RestaurantsRepository } from './repositories/restaurants.repository';
import { RestaurantsPrismaRepository } from './repositories/prisma/restaurants.repository.prisma';
import { AuthenticationAdm } from 'src/middlewares/authentication/authentication.adm';

@Module({
  controllers: [RestaurantsController],
  providers: [
    RestaurantsService,
    PrismaService,
    { provide: RestaurantsRepository, useClass: RestaurantsPrismaRepository },
  ],
  exports: [RestaurantsService],
})
export class RestaurantsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationAdm)
      .forRoutes(
        { path: 'restaurants/:id', method: RequestMethod.PATCH },
        { path: 'restaurants/:id', method: RequestMethod.DELETE },
      );
  }
}
