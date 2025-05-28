import { Injectable } from '@nestjs/common';
import { PatientRepository } from './patient.repository';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class PatientService {
  constructor(private readonly patientRepository: PatientRepository) {}

  async create(createPatientDto: CreatePatientDto) {
    return this.patientRepository.create(createPatientDto);
  }

  async findAll() {
    return this.patientRepository.findAll();
  }

  async findOne(id: number) {
    return this.patientRepository.findOne(id);
  }

  async findOneByEmail(email: string) {
    return await this.patientRepository.findOneByEmail(email);
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    if (updatePatientDto.password)
      updatePatientDto.password = await encodePassword(
        updatePatientDto.password,
      );
    return this.patientRepository.update(id, updatePatientDto);
  }

  async delete(id: number) {
    return this.patientRepository.delete(id);
  }
}
