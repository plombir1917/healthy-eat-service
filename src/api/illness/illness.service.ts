import { Injectable } from '@nestjs/common';
import { IllnessRepository } from './illness.repository';
import { CreateIllnessDto } from './dto/create-illness.dto';
import { UpdateIllnessDto } from './dto/update-illness.dto';

@Injectable()
export class IllnessService {
  constructor(private readonly illnessRepository: IllnessRepository) {}

  async create(createIllnessDto: CreateIllnessDto) {
    return this.illnessRepository.create(createIllnessDto);
  }

  async findAll() {
    return this.illnessRepository.findAll();
  }

  async findOne(id: number) {
    return this.illnessRepository.findOne(id);
  }

  async update(id: number, updateIllnessDto: UpdateIllnessDto) {
    return this.illnessRepository.update(id, updateIllnessDto);
  }

  async remove(id: number) {
    return this.illnessRepository.remove(id);
  }
}
