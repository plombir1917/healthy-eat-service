import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsInt,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty({
    description: 'Имя пациента',
    example: 'Иван Иванов',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email пациента',
    example: 'patient@example.com',
  })
  @IsEmail()
  login: string;

  @ApiProperty({
    description:
      'Пароль пациента (минимум 8 символов, должен содержать заглавные и строчные буквы, цифры и специальные символы)',
    example: 'StrongP@ss123',
  })
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    description: 'Рост пациента в сантиметрах',
    example: 175,
    required: false,
  })
  @IsInt()
  @IsOptional()
  height?: number;

  @ApiProperty({
    description: 'Вес пациента в килограммах',
    example: 70,
    required: false,
  })
  @IsInt()
  @IsOptional()
  weight?: number;
}
