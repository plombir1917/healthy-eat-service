import { PartialType } from '@nestjs/mapped-types';
import { CreateProcessMapDto } from './create-process_map.dto';

export class UpdateProcessMapDto extends PartialType(CreateProcessMapDto) {}
