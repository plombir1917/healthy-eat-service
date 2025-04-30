import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { IRepository } from 'src/interface/repository.interface';

@Injectable()
export class RequestRepository implements IRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return this.prisma.request.create({ data });
  }

  async findAll(): Promise<any> {
    return this.prisma.request.findMany();
  }

  async findOne(id: number): Promise<any> {
    return this.prisma.request.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, data: any): Promise<any> {
    return this.prisma.request.update({ where: { id }, data });
  }

  async delete(id: number): Promise<any> {
    return this.prisma.request.delete({ where: { id } });
  }
}
