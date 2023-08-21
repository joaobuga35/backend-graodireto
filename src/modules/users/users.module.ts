import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { UserPrismaRepository } from './repositories/prisma/users.prisma.repository';
import { ValidationEmailMiddleware } from 'src/middlewares/validation/validation.middleware';
import { AuthenticationAdmAndIdMiddleware } from 'src/middlewares/authentication/authentication.admin.id';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    { provide: UsersRepository, useClass: UserPrismaRepository },
  ],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidationEmailMiddleware)
      .forRoutes(
        { path: 'users', method: RequestMethod.POST },
        { path: 'users/:id', method: RequestMethod.PATCH },
      );
    consumer
      .apply(AuthenticationAdmAndIdMiddleware)
      .forRoutes(
        { path: 'users/:id', method: RequestMethod.PATCH },
        { path: 'users/:id', method: RequestMethod.DELETE },
      );
    consumer.apply(AuthenticationAdmAndIdMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    });
  }
}
