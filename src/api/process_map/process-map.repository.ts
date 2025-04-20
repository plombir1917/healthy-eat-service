import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateProcessMapDto } from './dto/create-process-map.dto';
import { UpdateProcessMapDto } from './dto/update-process-map.dto';

@Injectable()
export class ProcessMapRepository {
  constructor(private prisma: PrismaService) {}

  async create(createProcessMapDto: CreateProcessMapDto) {
    return this.prisma.process_map.create({
      data: createProcessMapDto,
    });
  }

  async findAll() {
    return this.prisma.process_map.findMany();
  }

  async findOne(id: number) {
    return this.prisma.process_map.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProcessMapDto: UpdateProcessMapDto) {
    return this.prisma.process_map.update({
      where: { id },
      data: updateProcessMapDto,
    });
  }

  async remove(id: number) {
    return this.prisma.process_map.delete({
      where: { id },
    });
  }
}
