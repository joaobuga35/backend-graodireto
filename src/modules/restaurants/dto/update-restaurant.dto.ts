import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto, CreateRestaurantDto } from './create-restaurant.dto';
import {
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Name',
    type: String,
    default: 'Pizzaria',
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Phone',
    type: String,
    default: '+55 (16) 00000-0000',
  })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Image',
    type: String,
    default: 'www.imagem.com',
  })
  image: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  @ApiProperty({
    description: 'address',
    type: String,
    default: {
      zipCode: '12345-678',
      state: 'SP',
      city: 'São Paulo',
      street: 'Rua das Flores',
      number: '123',
      complement: 'Apt. 456',
    },
  })
  address: CreateAddressDto;
}
