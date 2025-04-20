import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateIllnessDto } from './dto/create-illness.dto';
import { UpdateIllnessDto } from './dto/update-illness.dto';

@Injectable()
export class IllnessRepository {
  constructor(private prisma: PrismaService) {}

  async create(createIllnessDto: CreateIllnessDto) {
    return this.prisma.illness.create({
      data: createIllnessDto,
    });
  }

  async findAll() {
    return this.prisma.illness.findMany();
  }

  async findOne(id: number) {
    return this.prisma.illness.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateIllnessDto: UpdateIllnessDto) {
    return this.prisma.illness.update({
      where: { id },
      data: updateIllnessDto,
    });
  }

  async remove(id: number) {
    return this.prisma.illness.delete({
      where: { id },
    });
  }
}
