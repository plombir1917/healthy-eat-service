import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { IRepository } from 'src/interface/repository.interface';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientRepository implements IRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    return await this.prisma.patient.create({
      data: createPatientDto,
    });
  }

  async findOne(): Promise<any> {}

  async findOneByEmail(login: string) {
    return await this.prisma.patient.findUniqueOrThrow({ where: { login } });
  }

  async findAll(): Promise<any> {}

  async update(): Promise<any> {}

  async delete(): Promise<any> {}
}
