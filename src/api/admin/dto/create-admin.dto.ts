import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({
    description: 'Имя администратора',
    example: 'Иван',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Фамилия администратора',
    example: 'Иванов',
  })
  @IsString()
  @IsNotEmpty()
  surname: string;

  @ApiProperty({
    description: 'Email администратора',
    example: 'admin@example.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  login: string;

  @ApiProperty({
    description:
      'Пароль администратора (минимум 8 символов, включая заглавные буквы, цифры и специальные символы)',
    example: 'Admin123!',
  })
  @IsString()
  @IsStrongPassword()
  password: string;
}
