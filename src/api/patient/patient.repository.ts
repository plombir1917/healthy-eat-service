import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { IRepository } from 'src/interface/repository.interface';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientRepository implements IRepository {
  constructor(private prisma: PrismaService) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.prisma.patient.create({
      data: createPatientDto,
    });
  }

  async findAll(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  async findOne(id: number): Promise<Patient | null> {
    return this.prisma.patient.findUnique({
      where: { id },
    });
  }

  async findOneByEmail(login: string) {
    return await this.prisma.patient.findUniqueOrThrow({ where: { login } });
  }

  async update(
    id: number,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    return this.prisma.patient.update({
      where: { id },
      data: updatePatientDto,
    });
  }

  async delete(id: number): Promise<Patient> {
    return this.prisma.patient.delete({
      where: { id },
    });
  }
}
