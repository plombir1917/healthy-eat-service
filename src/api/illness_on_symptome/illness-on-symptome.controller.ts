import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IllnessOnSymptomeService } from './illness-on-symptome.service';
import { CreateIllnessOnSymptomeDto } from './dto/create-illness-on-symptome.dto';
import { UpdateIllnessOnSymptomeDto } from './dto/update-illness-on-symptome.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('illness-symptoms')
@Controller('illness-on-symptome')
export class IllnessOnSymptomeController {
  constructor(
    private readonly illnessOnSymptomeService: IllnessOnSymptomeService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Создание связи между заболеванием и симптомом' })
  @ApiResponse({
    status: 201,
    description: 'Связь успешно создана',
    type: CreateIllnessOnSymptomeDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createIllnessOnSymptomeDto: CreateIllnessOnSymptomeDto) {
    return this.illnessOnSymptomeService.create(createIllnessOnSymptomeDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Получение списка всех связей заболеваний и симптомов',
  })
  @ApiResponse({
    status: 200,
    description: 'Список связей успешно получен',
    type: [CreateIllnessOnSymptomeDto],
  })
  findAll() {
    return this.illnessOnSymptomeService.findAll();
  }

  @Get(':illness_id/:symptome_id')
  @ApiOperation({
    summary: 'Получение информации о связи заболевания и симптома',
  })
  @ApiParam({ name: 'illness_id', description: 'ID заболевания' })
  @ApiParam({ name: 'symptome_id', description: 'ID симптома' })
  @ApiResponse({
    status: 200,
    description: 'Информация о связи успешно получена',
    type: CreateIllnessOnSymptomeDto,
  })
  @ApiResponse({ status: 404, description: 'Связь не найдена' })
  findOne(
    @Param('illness_id') illness_id: string,
    @Param('symptome_id') symptome_id: string,
  ) {
    return this.illnessOnSymptomeService.findOne(+illness_id, +symptome_id);
  }

  @Patch(':illness_id/:symptome_id')
  @ApiOperation({
    summary: 'Обновление информации о связи заболевания и симптома',
  })
  @ApiParam({ name: 'illness_id', description: 'ID заболевания' })
  @ApiParam({ name: 'symptome_id', description: 'ID симптома' })
  @ApiResponse({
    status: 200,
    description: 'Информация о связи успешно обновлена',
    type: UpdateIllnessOnSymptomeDto,
  })
  @ApiResponse({ status: 404, description: 'Связь не найдена' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(
    @Param('illness_id') illness_id: string,
    @Param('symptome_id') symptome_id: string,
    @Body() updateIllnessOnSymptomeDto: UpdateIllnessOnSymptomeDto,
  ) {
    return this.illnessOnSymptomeService.update(
      +illness_id,
      +symptome_id,
      updateIllnessOnSymptomeDto,
    );
  }

  @Delete(':illness_id/:symptome_id')
  @ApiOperation({ summary: 'Удаление связи между заболеванием и симптомом' })
  @ApiParam({ name: 'illness_id', description: 'ID заболевания' })
  @ApiParam({ name: 'symptome_id', description: 'ID симптома' })
  @ApiResponse({ status: 200, description: 'Связь успешно удалена' })
  @ApiResponse({ status: 404, description: 'Связь не найдена' })
  remove(
    @Param('illness_id') illness_id: string,
    @Param('symptome_id') symptome_id: string,
  ) {
    return this.illnessOnSymptomeService.remove(+illness_id, +symptome_id);
  }
}
