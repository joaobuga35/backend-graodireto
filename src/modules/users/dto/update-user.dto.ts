import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  @MinLength(3)
  @ApiProperty({
    description: 'Name',
    type: String,
    default: 'João',
  })
  name: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({
    description: 'Email',
    type: String,
    default: 'joao@mail.com',
  })
  email: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transform'],
  })
  @ApiProperty({
    description: 'password',
    type: String,
    default: '1234',
  })
  password: string;

  @IsOptional()
  @IsBoolean()
  admin: boolean;
}
