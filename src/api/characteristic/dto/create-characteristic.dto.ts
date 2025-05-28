import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCharacteristicDto {
  @ApiProperty({
    description: 'Пищевая непереносимость пациента',
    example: 'Лактоза, глютен',
  })
  @IsNotEmpty()
  @IsString()
  intolerance: string;

  @ApiProperty({
    description: 'Пищевые предпочтения пациента',
    example: 'Вегетарианство',
  })
  @IsNotEmpty()
  @IsString()
  preference: string;

  @ApiProperty({
    description: 'ID пациента',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  patient_id: number;
}
