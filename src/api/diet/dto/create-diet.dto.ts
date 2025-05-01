import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDietDto {
  @ApiProperty({
    description: 'Название диеты',
    example: 'Низкоуглеводная диета',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'ID заболевания, для которого предназначена диета',
    example: 1,
  })
  @IsInt()
  illness_id: number;
}
