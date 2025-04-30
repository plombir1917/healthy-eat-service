import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminRepository } from './admin.repository';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  create(createAdminDto: CreateAdminDto) {
    try {
      return this.adminRepository.create(createAdminDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return this.adminRepository.findAll();
  }

  findOne(id: number) {
    try {
      return this.adminRepository.findOne(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      return this.adminRepository.update(id, updateAdminDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  remove(id: number) {
    try {
      return this.adminRepository.delete(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
