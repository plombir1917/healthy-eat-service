import { Injectable } from '@nestjs/common';
import { CreateProcessMapDto } from './dto/create-process_map.dto';
import { UpdateProcessMapDto } from './dto/update-process_map.dto';

@Injectable()
export class ProcessMapService {
  create(createProcessMapDto: CreateProcessMapDto) {
    return 'This action adds a new processMap';
  }

  findAll() {
    return `This action returns all processMap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} processMap`;
  }

  update(id: number, updateProcessMapDto: UpdateProcessMapDto) {
    return `This action updates a #${id} processMap`;
  }

  remove(id: number) {
    return `This action removes a #${id} processMap`;
  }
}
