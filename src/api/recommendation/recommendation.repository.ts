import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';

@Injectable()
export class RecommendationRepository {
  constructor(private prisma: PrismaService) {}

  async create(createRecommendationDto: CreateRecommendationDto) {
    return this.prisma.recommendation.create({
      data: createRecommendationDto,
    });
  }

  async findAll() {
    return this.prisma.recommendation.findMany();
  }

  async findOne(id: number) {
    return this.prisma.recommendation.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRecommendationDto: UpdateRecommendationDto) {
    return this.prisma.recommendation.update({
      where: { id },
      data: updateRecommendationDto,
    });
  }

  async remove(id: number) {
    return this.prisma.recommendation.delete({
      where: { id },
    });
  }
}
