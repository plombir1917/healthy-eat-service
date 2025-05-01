import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('recommendations')
@Controller('recommendation')
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Post()
  @ApiOperation({ summary: 'Создание новой рекомендации' })
  @ApiResponse({
    status: 201,
    description: 'Рекомендация успешно создана',
    type: CreateRecommendationDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createRecommendationDto: CreateRecommendationDto) {
    return this.recommendationService.create(createRecommendationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех рекомендаций' })
  @ApiResponse({
    status: 200,
    description: 'Список рекомендаций успешно получен',
    type: [CreateRecommendationDto],
  })
  findAll() {
    return this.recommendationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации о рекомендации по ID' })
  @ApiParam({ name: 'id', description: 'ID рекомендации' })
  @ApiResponse({
    status: 200,
    description: 'Информация о рекомендации успешно получена',
    type: CreateRecommendationDto,
  })
  @ApiResponse({ status: 404, description: 'Рекомендация не найдена' })
  findOne(@Param('id') id: string) {
    return this.recommendationService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации о рекомендации' })
  @ApiParam({ name: 'id', description: 'ID рекомендации' })
  @ApiResponse({
    status: 200,
    description: 'Информация о рекомендации успешно обновлена',
    type: UpdateRecommendationDto,
  })
  @ApiResponse({ status: 404, description: 'Рекомендация не найдена' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(
    @Param('id') id: string,
    @Body() updateRecommendationDto: UpdateRecommendationDto,
  ) {
    return this.recommendationService.update(+id, updateRecommendationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление рекомендации' })
  @ApiParam({ name: 'id', description: 'ID рекомендации' })
  @ApiResponse({ status: 200, description: 'Рекомендация успешно удалена' })
  @ApiResponse({ status: 404, description: 'Рекомендация не найдена' })
  remove(@Param('id') id: string) {
    return this.recommendationService.remove(+id);
  }
}
