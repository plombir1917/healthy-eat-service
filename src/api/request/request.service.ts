import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestRepository } from './request.repository';

@Injectable()
export class RequestService {
  constructor(private readonly requestRepository: RequestRepository) {}
  async create(createRequestDto: CreateRequestDto) {
    return await this.requestRepository.create(createRequestDto);
  }

  async findAll() {
    return await this.requestRepository.findAll();
  }

  async findOne(id: number) {
    return await this.requestRepository.findOne(id);
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    return await this.requestRepository.update(id, updateRequestDto);
  }

  async remove(id: number) {
    return await this.requestRepository.delete(id);
  }
}
