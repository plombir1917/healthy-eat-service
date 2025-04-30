import { Injectable } from '@nestjs/common';
import { ProcessMapRepository } from './process-map.repository';
import { CreateProcessMapDto } from './dto/create-process-map.dto';
import { UpdateProcessMapDto } from './dto/update-process-map.dto';

@Injectable()
export class ProcessMapService {
  constructor(private readonly processMapRepository: ProcessMapRepository) {}

  async create(createProcessMapDto: CreateProcessMapDto) {
    return this.processMapRepository.create(createProcessMapDto);
  }

  async findAll() {
    return this.processMapRepository.findAll();
  }

  async findOne(id: number) {
    return this.processMapRepository.findOne(id);
  }

  async update(id: number, updateProcessMapDto: UpdateProcessMapDto) {
    return this.processMapRepository.update(id, updateProcessMapDto);
  }

  async remove(id: number) {
    return this.processMapRepository.remove(id);
  }
}
