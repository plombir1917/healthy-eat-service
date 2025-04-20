import { IsString } from 'class-validator';

export class CreateSymptomeDto {
  @IsString()
  name: string;
}
