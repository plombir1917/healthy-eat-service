import { Injectable } from '@nestjs/common';
import { DietRepository } from './diet.repository';
import { CreateDietDto } from './dto/create-diet.dto';
import { UpdateDietDto } from './dto/update-diet.dto';

@Injectable()
export class DietService {
  constructor(private readonly dietRepository: DietRepository) {}

  async create(createDietDto: CreateDietDto) {
    return this.dietRepository.create(createDietDto);
  }

  async findAll() {
    return this.dietRepository.findAll();
  }

  async findOne(id: number) {
    return this.dietRepository.findOne(id);
  }

  async update(id: number, updateDietDto: UpdateDietDto) {
    return this.dietRepository.update(id, updateDietDto);
  }

  async remove(id: number) {
    return this.dietRepository.remove(id);
  }
}
