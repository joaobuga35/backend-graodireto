import { Injectable, NestMiddleware, ConflictException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ValidationMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if (req.body.email) {
      const existingUser = await this.prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });

      if (existingUser) {
        throw new ConflictException('Email already exists');
      }
    }
    next();
  }
}
