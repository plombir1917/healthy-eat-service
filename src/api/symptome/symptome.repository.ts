import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateSymptomeDto } from './dto/create-symptome.dto';
import { UpdateSymptomeDto } from './dto/update-symptome.dto';

@Injectable()
export class SymptomeRepository {
  constructor(private prisma: PrismaService) {}

  async create(createSymptomeDto: CreateSymptomeDto) {
    return this.prisma.symptome.create({
      data: createSymptomeDto,
    });
  }

  async findAll() {
    return this.prisma.symptome.findMany();
  }

  async findOne(id: number) {
    return this.prisma.symptome.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSymptomeDto: UpdateSymptomeDto) {
    return this.prisma.symptome.update({
      where: { id },
      data: updateSymptomeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.symptome.delete({
      where: { id },
    });
  }
}
