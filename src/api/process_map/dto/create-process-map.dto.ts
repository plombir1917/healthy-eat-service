import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateProcessMapDto {
  @IsString()
  dish_name: string;

  @IsString()
  ingredients: string;

  @IsString()
  cooking_process: string;

  @IsInt()
  proteins: number;

  @IsInt()
  fats: number;

  @IsInt()
  carbohydrates: number;

  @IsInt()
  calories: number;

  @IsInt()
  @IsOptional()
  diet_id?: number;
}
