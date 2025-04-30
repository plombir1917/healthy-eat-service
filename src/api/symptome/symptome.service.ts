import { Injectable } from '@nestjs/common';
import { SymptomeRepository } from './symptome.repository';
import { CreateSymptomeDto } from './dto/create-symptome.dto';
import { UpdateSymptomeDto } from './dto/update-symptome.dto';

@Injectable()
export class SymptomeService {
  constructor(private readonly symptomeRepository: SymptomeRepository) {}

  async create(createSymptomeDto: CreateSymptomeDto) {
    return this.symptomeRepository.create(createSymptomeDto);
  }

  async findAll() {
    return this.symptomeRepository.findAll();
  }

  async findOne(id: number) {
    return this.symptomeRepository.findOne(id);
  }

  async update(id: number, updateSymptomeDto: UpdateSymptomeDto) {
    return this.symptomeRepository.update(id, updateSymptomeDto);
  }

  async remove(id: number) {
    return this.symptomeRepository.remove(id);
  }
}
