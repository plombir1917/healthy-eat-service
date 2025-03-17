import { PartialType } from '@nestjs/mapped-types';
import { CreateSymptomeDto } from './create-symptome.dto';

export class UpdateSymptomeDto extends PartialType(CreateSymptomeDto) {}
