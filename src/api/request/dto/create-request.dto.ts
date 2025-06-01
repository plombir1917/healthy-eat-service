import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {
  @ApiProperty({
    description: 'ID врача',
    example: 1,
  })
  @IsInt()
  doctor_id: number;

  @ApiProperty({
    description: 'ID пациента',
    example: 1,
  })
  @IsInt()
  patient_id: number;

  @ApiProperty({
    description: 'ID рекомендации (опционально)',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  recommendation_id?: number;

  @ApiProperty({
    description: 'Статус (опционально)',
    example: 'SEND',
    required: false,
  })
  @IsInt()
  @IsOptional()
  status?: string;
}
