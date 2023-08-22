import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumberString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
