import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';

@Module({
  imports: [UsersModule, AuthModule, RestaurantsModule],
})
export class AppModule {}
