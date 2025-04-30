import { PartialType } from '@nestjs/mapped-types';
import { CreateIllnessOnSymptomeDto } from './create-illness-on-symptome.dto';

export class UpdateIllnessOnSymptomeDto extends PartialType(
  CreateIllnessOnSymptomeDto,
) {}
