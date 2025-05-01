import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {
  @ApiProperty({
    description: 'Имя врача',
    example: 'Иван',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Фамилия врача',
    example: 'Петров',
  })
  @IsString()
  surname: string;

  @ApiProperty({
    description: 'URL фотографии врача',
    example: 'https://example.com/photo.jpg',
  })
  @IsString()
  photo: string;

  @ApiProperty({
    description: 'Достижения и опыт врача',
    example: 'Кандидат медицинских наук, 10 лет практики',
  })
  @IsString()
  achievements: string;

  @ApiProperty({
    description: 'Логин врача',
    example: 'doctor@example.com',
  })
  @IsString()
  login: string;

  @ApiProperty({
    description: 'Пароль врача',
    example: 'StrongP@ss123',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'ID администратора, создавшего врача',
    example: 1,
  })
  @IsInt()
  admin_id: number;
}
