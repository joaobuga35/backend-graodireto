import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name',
    type: String,
    default: 'Strognoff',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'description',
    type: String,
    default: 'O melhor da cidade.',
  })
  description: string;

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'price',
    type: String,
    default: '29.90',
  })
  price: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Image',
    type: String,
    default: 'www.imagem.com',
  })
  image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'restaurantId',
    type: String,
    default: 'a69ee399-e0c3-4434-879a-c85da54ad762',
  })
  restaurantId: string;
}
