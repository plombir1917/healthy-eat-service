import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIllnessOnPatientDto } from './dto/create-illness_on_patient.dto';
import { UpdateIllnessOnPatientDto } from './dto/update-illness_on_patient.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class IllnessOnPatientService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createIllnessOnPatientDto: CreateIllnessOnPatientDto) {
    return await this.prisma.illness_on_patient.create({
      data: createIllnessOnPatientDto,
    });
  }

  async findAll() {
    return await this.prisma.illness_on_patient.findMany();
  }

  async findOne(illness_id: number, patient_id: number) {
    const illnessOnPatient = await this.prisma.illness_on_patient.findUnique({
      where: { illness_id_patient_id: { illness_id, patient_id } },
    });
    if (!illnessOnPatient) {
      throw new NotFoundException(
        `Запись с illness_id "${illness_id}" и patient_id "${patient_id}" не найдена`,
      );
    }
    return illnessOnPatient;
  }

  async update(
    illness_id: number,
    patient_id: number,
    updateIllnessOnPatientDto: UpdateIllnessOnPatientDto,
  ) {
    await this.findOne(illness_id, patient_id); // Проверяем существование записи
    return await this.prisma.illness_on_patient.update({
      where: { illness_id_patient_id: { illness_id, patient_id } },
      data: updateIllnessOnPatientDto,
    });
  }

  async remove(illness_id: number, patient_id: number) {
    await this.findOne(illness_id, patient_id); // Проверяем существование записи
    return await this.prisma.illness_on_patient.delete({
      where: { illness_id_patient_id: { illness_id, patient_id } },
    });
  }
}
