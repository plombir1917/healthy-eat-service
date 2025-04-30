import { Injectable } from '@nestjs/common';
import { RecommendationRepository } from './recommendation.repository';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';

@Injectable()
export class RecommendationService {
  constructor(
    private readonly recommendationRepository: RecommendationRepository,
  ) {}

  async create(createRecommendationDto: CreateRecommendationDto) {
    return this.recommendationRepository.create(createRecommendationDto);
  }

  async findAll() {
    return this.recommendationRepository.findAll();
  }

  async findOne(id: number) {
    return this.recommendationRepository.findOne(id);
  }

  async update(id: number, updateRecommendationDto: UpdateRecommendationDto) {
    return this.recommendationRepository.update(id, updateRecommendationDto);
  }

  async remove(id: number) {
    return this.recommendationRepository.remove(id);
  }
}
