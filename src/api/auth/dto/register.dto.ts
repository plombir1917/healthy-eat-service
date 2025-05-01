import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Иван Иванов',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email пользователя',
    example: 'user@example.com',
  })
  @IsEmail()
  login: string;

  @ApiProperty({
    description:
      'Пароль пользователя (минимум 8 символов, должен содержать заглавные и строчные буквы, цифры и специальные символы)',
    example: 'StrongP@ss123',
  })
  @IsStrongPassword()
  password: string;
}
