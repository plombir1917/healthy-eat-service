import { IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProcessMapDto {
  @ApiProperty({
    description: 'Название блюда',
    example: 'Куриная грудка с овощами',
  })
  @IsString()
  dish_name: string;

  @ApiProperty({
    description: 'Список ингредиентов',
    example: 'Куриная грудка, брокколи, морковь, оливковое масло',
  })
  @IsString()
  ingredients: string;

  @ApiProperty({
    description: 'Процесс приготовления',
    example:
      '1. Нарезать куриную грудку. 2. Обжарить на оливковом масле. 3. Добавить овощи.',
  })
  @IsString()
  cooking_process: string;

  @ApiProperty({
    description: 'Количество белков (г)',
    example: 30,
  })
  @IsInt()
  proteins: number;

  @ApiProperty({
    description: 'Количество жиров (г)',
    example: 10,
  })
  @IsInt()
  fats: number;

  @ApiProperty({
    description: 'Количество углеводов (г)',
    example: 15,
  })
  @IsInt()
  carbohydrates: number;

  @ApiProperty({
    description: 'Калорийность (ккал)',
    example: 250,
  })
  @IsInt()
  calories: number;

  @ApiProperty({
    description: 'ID диеты (опционально)',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  diet_id?: number;
}
