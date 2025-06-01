import { PartialType } from '@nestjs/mapped-types';
import { CreateIllnessOnPatientDto } from './create-illness_on_patient.dto';

export class UpdateIllnessOnPatientDto extends PartialType(CreateIllnessOnPatientDto) {}
