import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSymptomeDto {
  @ApiProperty({
    description: 'Название симптома',
    example: 'Головная боль',
  })
  @IsString()
  name: string;
}
