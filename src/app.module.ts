import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { FoodsModule } from './modules/foods/foods.module';

@Module({
  imports: [UsersModule, AuthModule, RestaurantsModule, FoodsModule],
})
export class AppModule {}
