import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumberString, IsOptional } from 'class-validator';

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Name',
    type: String,
    default: 'Strognoff',
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'description',
    type: String,
    default: 'O melhor da cidade.',
  })
  description: string;

  @IsNumberString()
  @IsOptional()
  @ApiProperty({
    description: 'price',
    type: String,
    default: '29.90',
  })
  price: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Image',
    type: String,
    default: 'www.imagem.com',
  })
  image: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'restaurantId',
    type: String,
    default: 'a69ee399-e0c3-4434-879a-c85da54ad762',
  })
  restaurantId: string;
}
