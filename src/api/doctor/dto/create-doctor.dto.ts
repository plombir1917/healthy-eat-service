import { IsString, IsInt } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  photo: string;

  @IsString()
  achievements: string;

  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsInt()
  admin_id: number;
}
