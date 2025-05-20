import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(admin: CreateAdminDto): Promise<Admin> {
    return this.prisma.admin.create({
      data: admin,
    });
  }

  async findAll(): Promise<Admin[]> {
    return this.prisma.admin.findMany();
  }

  async findOne(id: number): Promise<Admin> {
    return this.prisma.admin.findUniqueOrThrow({ where: { id } });
  }

  async findOneByEmail(email: string) {
    return await this.prisma.admin.findUniqueOrThrow({
      where: {
        login: email,
      },
    });
  }

  async update(id: number, admin: UpdateAdminDto): Promise<Admin> {
    return this.prisma.admin.update({ where: { id }, data: admin });
  }

  async delete(id: number): Promise<Admin> {
    return this.prisma.admin.delete({ where: { id } });
  }
}
