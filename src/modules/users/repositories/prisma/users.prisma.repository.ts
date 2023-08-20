import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async update(id: string, data: UpdateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
