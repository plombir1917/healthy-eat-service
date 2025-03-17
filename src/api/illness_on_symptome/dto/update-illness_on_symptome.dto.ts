import { PartialType } from '@nestjs/mapped-types';
import { CreateIllnessOnSymptomeDto } from './create-illness_on_symptome.dto';

export class UpdateIllnessOnSymptomeDto extends PartialType(CreateIllnessOnSymptomeDto) {}
