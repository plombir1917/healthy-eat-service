import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminRepository } from './admin.repository';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  async create(createAdminDto: CreateAdminDto) {
    try {
      createAdminDto.password = await encodePassword(createAdminDto.password);
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

  async findOneByEmail(email: string) {
    return await this.adminRepository.findOneByEmail(email);
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      if (updateAdminDto.password)
        updateAdminDto.password = await encodePassword(updateAdminDto.password);
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
