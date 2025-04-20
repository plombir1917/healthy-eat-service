import { IsString, IsInt } from 'class-validator';

export class CreateDietDto {
  @IsString()
  name: string;

  @IsInt()
  illness_id: number;
}
