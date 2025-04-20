import { Injectable } from '@nestjs/common';
import { IllnessOnSymptomeRepository } from './illness-on-symptome.repository';
import { CreateIllnessOnSymptomeDto } from './dto/create-illness-on-symptome.dto';
import { UpdateIllnessOnSymptomeDto } from './dto/update-illness-on-symptome.dto';

@Injectable()
export class IllnessOnSymptomeService {
  constructor(
    private readonly illnessOnSymptomeRepository: IllnessOnSymptomeRepository,
  ) {}

  async create(createIllnessOnSymptomeDto: CreateIllnessOnSymptomeDto) {
    return this.illnessOnSymptomeRepository.create(createIllnessOnSymptomeDto);
  }

  async findAll() {
    return this.illnessOnSymptomeRepository.findAll();
  }

  async findOne(illness_id: number, symptome_id: number) {
    return this.illnessOnSymptomeRepository.findOne(illness_id, symptome_id);
  }

  async update(
    illness_id: number,
    symptome_id: number,
    updateIllnessOnSymptomeDto: UpdateIllnessOnSymptomeDto,
  ) {
    return this.illnessOnSymptomeRepository.update(
      illness_id,
      symptome_id,
      updateIllnessOnSymptomeDto,
    );
  }

  async remove(illness_id: number, symptome_id: number) {
    return this.illnessOnSymptomeRepository.remove(illness_id, symptome_id);
  }
}
