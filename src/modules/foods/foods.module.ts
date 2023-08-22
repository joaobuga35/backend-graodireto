import { Module } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { PrismaService } from 'src/database/prisma.service';
import { FoodsRepository } from './repositories/foods.repository';
import { FoodsPrismaRepository } from './repositories/prisma/foods.repository.prisma';

@Module({
  controllers: [FoodsController],
  providers: [
    FoodsService,
    PrismaService,
    { provide: FoodsRepository, useClass: FoodsPrismaRepository },
  ],
  exports: [FoodsService],
})
export class FoodsModule {}
