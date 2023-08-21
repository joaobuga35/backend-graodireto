import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from 'src/database/prisma.service';
import jwt_decode from 'jwt-decode';

interface IDecode {
  admin: boolean;
  iat: number;
  exp: number;
  sub: string;
}

@Injectable()
export class AuthenticationAdmAndIdMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded: IDecode = jwt_decode(token);

    if (decoded.sub !== req.params.id && !decoded.admin) {
      throw new UnauthorizedException('User without permission');
    }

    next();
  }
}
