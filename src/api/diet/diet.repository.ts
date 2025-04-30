import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateDietDto } from './dto/create-diet.dto';
import { UpdateDietDto } from './dto/update-diet.dto';

@Injectable()
export class DietRepository {
  constructor(private prisma: PrismaService) {}

  async create(createDietDto: CreateDietDto) {
    return this.prisma.diet.create({
      data: createDietDto,
    });
  }

  async findAll() {
    return this.prisma.diet.findMany();
  }

  async findOne(id: number) {
    return this.prisma.diet.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDietDto: UpdateDietDto) {
    return this.prisma.diet.update({
      where: { id },
      data: updateDietDto,
    });
  }

  async remove(id: number) {
    return this.prisma.diet.delete({
      where: { id },
    });
  }
}
