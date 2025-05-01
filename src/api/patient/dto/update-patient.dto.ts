import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
  @ApiProperty({
    description: 'Имя пациента',
    example: 'Иван Иванов',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'Email пациента',
    example: 'patient@example.com',
    required: false,
  })
  login?: string;

  @ApiProperty({
    description: 'Пароль пациента',
    example: 'StrongP@ss123',
    required: false,
  })
  password?: string;

  @ApiProperty({
    description: 'Рост пациента в сантиметрах',
    example: 175,
    required: false,
  })
  height?: number;

  @ApiProperty({
    description: 'Вес пациента в килограммах',
    example: 70,
    required: false,
  })
  weight?: number;
}
