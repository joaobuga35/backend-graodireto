import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const newUser = await this.userRepository.update(id, updateUserDto);
    return newUser;
  }

  async delete(id: string) {
    await this.userRepository.delete(id);
  }
}
