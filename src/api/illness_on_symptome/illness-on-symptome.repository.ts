import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateIllnessOnSymptomeDto } from './dto/create-illness-on-symptome.dto';
import { UpdateIllnessOnSymptomeDto } from './dto/update-illness-on-symptome.dto';

@Injectable()
export class IllnessOnSymptomeRepository {
  constructor(private prisma: PrismaService) {}

  async create(createIllnessOnSymptomeDto: CreateIllnessOnSymptomeDto) {
    return this.prisma.illness_on_symptome.create({
      data: createIllnessOnSymptomeDto,
    });
  }

  async findAll() {
    return this.prisma.illness_on_symptome.findMany();
  }

  async findOne(illness_id: number, symptome_id: number) {
    return this.prisma.illness_on_symptome.findUnique({
      where: {
        illness_id_symptome_id: {
          illness_id,
          symptome_id,
        },
      },
    });
  }

  async update(
    illness_id: number,
    symptome_id: number,
    updateIllnessOnSymptomeDto: UpdateIllnessOnSymptomeDto,
  ) {
    return this.prisma.illness_on_symptome.update({
      where: {
        illness_id_symptome_id: {
          illness_id,
          symptome_id,
        },
      },
      data: updateIllnessOnSymptomeDto,
    });
  }

  async remove(illness_id: number, symptome_id: number) {
    return this.prisma.illness_on_symptome.delete({
      where: {
        illness_id_symptome_id: {
          illness_id,
          symptome_id,
        },
      },
    });
  }
}
