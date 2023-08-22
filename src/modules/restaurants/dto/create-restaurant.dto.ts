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
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
