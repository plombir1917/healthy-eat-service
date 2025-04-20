import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';

@Injectable()
export class CharacteristicRepository {
  constructor(private prisma: PrismaService) {}

  async create(createCharacteristicDto: CreateCharacteristicDto) {
    return this.prisma.characteristic.create({
      data: createCharacteristicDto,
    });
  }

  async findAll() {
    return this.prisma.characteristic.findMany();
  }

  async findOne(id: number) {
    return this.prisma.characteristic.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCharacteristicDto: UpdateCharacteristicDto) {
    return this.prisma.characteristic.update({
      where: { id },
      data: updateCharacteristicDto,
    });
  }

  async remove(id: number) {
    return this.prisma.characteristic.delete({
      where: { id },
    });
  }
}
