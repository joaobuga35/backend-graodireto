import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsObject,
  ValidateNested,
} from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsOptional()
  @IsString()
  complement?: string;
}

export class CreateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name',
    type: String,
    default: 'Pizzaria',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Phone',
    type: String,
    default: '+55 (16) 00000-0000',
  })
  phone: string;

  @IsString()
  @IsNotEmpty()
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
