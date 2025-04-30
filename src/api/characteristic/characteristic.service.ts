import { Injectable } from '@nestjs/common';
import { CharacteristicRepository } from './characteristic.repository';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';

@Injectable()
export class CharacteristicService {
  constructor(
    private readonly characteristicRepository: CharacteristicRepository,
  ) {}

  async create(createCharacteristicDto: CreateCharacteristicDto) {
    return this.characteristicRepository.create(createCharacteristicDto);
  }

  async findAll() {
    return this.characteristicRepository.findAll();
  }

  async findOne(id: number) {
    return this.characteristicRepository.findOne(id);
  }

  async update(id: number, updateCharacteristicDto: UpdateCharacteristicDto) {
    return this.characteristicRepository.update(id, updateCharacteristicDto);
  }

  async remove(id: number) {
    return this.characteristicRepository.remove(id);
  }
}
