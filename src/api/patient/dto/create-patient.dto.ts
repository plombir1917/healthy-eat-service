import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  login: string;

  @IsStrongPassword()
  password: string;

  @IsInt()
  @IsOptional()
  height?: number;

  @IsInt()
  @IsOptional()
  weight?: number;
}
