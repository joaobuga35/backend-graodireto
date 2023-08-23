import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOkResponse({
    description: 'User created successfully',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Tue Aug 22 2023 16:46:43 GMT-0300 (Horário Padrão de Brasília)',
          id: 'c0c2fadb-4a63-43ce-906b-5489a8a5d37d',
          name: 'Lucas',
          email: 'lucas100@mail.com',
          admin: true,
        },
      },
    },
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'List Users',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Tue Aug 22 2023 16:46:43 GMT-0300 (Horário Padrão de Brasília)',
          id: 'c0c2fadb-4a63-43ce-906b-5489a8a5d37d',
          name: 'Lucas',
          email: 'lucas100@mail.com',
          admin: true,
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'List Users',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Tue Aug 22 2023 16:46:43 GMT-0300 (Horário Padrão de Brasília)',
          id: 'c0c2fadb-4a63-43ce-906b-5489a8a5d37d',
          name: 'Lucas',
          email: 'lucas100@mail.com',
          admin: true,
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'List Users',
    content: {
      'application/json': {
        example: {
          createdAt:
            'Tue Aug 22 2023 16:46:43 GMT-0300 (Horário Padrão de Brasília)',
          id: 'c0c2fadb-4a63-43ce-906b-5489a8a5d37d',
          name: 'Lucas',
          email: 'lucas100@mail.com',
          admin: true,
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return await this.usersService.delete(id);
  }
}
