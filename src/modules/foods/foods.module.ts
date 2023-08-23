import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { PrismaService } from 'src/database/prisma.service';
import { FoodsRepository } from './repositories/foods.repository';
import { FoodsPrismaRepository } from './repositories/prisma/foods.repository.prisma';
import { AuthenticationAdm } from 'src/middlewares/authentication/authentication.adm';

@Module({
  controllers: [FoodsController],
  providers: [
    FoodsService,
    PrismaService,
    { provide: FoodsRepository, useClass: FoodsPrismaRepository },
  ],
  exports: [FoodsService],
})
export class FoodsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationAdm)
      .forRoutes(
        { path: 'foods/:id', method: RequestMethod.PATCH },
        { path: 'foods/:id', method: RequestMethod.DELETE },
      );
  }
}
