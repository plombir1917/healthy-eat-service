import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCharacteristicDto {
  @IsNotEmpty()
  @IsString()
  intolerance: string;

  @IsNotEmpty()
  @IsString()
  preference: string;

  @IsNotEmpty()
  @IsNumber()
  patientId: number;
}
