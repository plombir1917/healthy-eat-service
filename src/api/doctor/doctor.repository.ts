import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorRepository {
  constructor(private prisma: PrismaService) {}

  async create(createDoctorDto: CreateDoctorDto) {
    return this.prisma.doctor.create({
      data: createDoctorDto,
    });
  }

  async findAll() {
    return this.prisma.doctor.findMany();
  }

  async findOne(id: number) {
    return this.prisma.doctor.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return this.prisma.doctor.update({
      where: { id },
      data: updateDoctorDto,
    });
  }

  async remove(id: number) {
    return this.prisma.doctor.delete({
      where: { id },
    });
  }
}
