import { Injectable } from '@nestjs/common';
import { DoctorRepository } from './doctor.repository';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  async create(createDoctorDto: CreateDoctorDto) {
    return this.doctorRepository.create(createDoctorDto);
  }

  async findAll() {
    return this.doctorRepository.findAll();
  }

  async findOne(id: number) {
    return this.doctorRepository.findOne(id);
  }

  async findOneByEmail(email: string) {
    return await this.doctorRepository.findOneByEmail(email);
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return this.doctorRepository.update(id, updateDoctorDto);
  }

  async remove(id: number) {
    return this.doctorRepository.remove(id);
  }
}
