import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProcessMapService } from './process-map.service';
import { CreateProcessMapDto } from './dto/create-process-map.dto';
import { UpdateProcessMapDto } from './dto/update-process-map.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('process-maps')
@Controller('process-map')
export class ProcessMapController {
  constructor(private readonly processMapService: ProcessMapService) {}

  @Post()
  @ApiOperation({ summary: 'Создание новой карты процесса' })
  @ApiResponse({
    status: 201,
    description: 'Карта процесса успешно создана',
    type: CreateProcessMapDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createProcessMapDto: CreateProcessMapDto) {
    return this.processMapService.create(createProcessMapDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех карт процессов' })
  @ApiResponse({
    status: 200,
    description: 'Список карт процессов успешно получен',
    type: [CreateProcessMapDto],
  })
  findAll() {
    return this.processMapService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации о карте процесса по ID' })
  @ApiParam({ name: 'id', description: 'ID карты процесса' })
  @ApiResponse({
    status: 200,
    description: 'Информация о карте процесса успешно получена',
    type: CreateProcessMapDto,
  })
  @ApiResponse({ status: 404, description: 'Карта процесса не найдена' })
  findOne(@Param('id') id: string) {
    return this.processMapService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации о карте процесса' })
  @ApiParam({ name: 'id', description: 'ID карты процесса' })
  @ApiResponse({
    status: 200,
    description: 'Информация о карте процесса успешно обновлена',
    type: UpdateProcessMapDto,
  })
  @ApiResponse({ status: 404, description: 'Карта процесса не найдена' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(
    @Param('id') id: string,
    @Body() updateProcessMapDto: UpdateProcessMapDto,
  ) {
    return this.processMapService.update(+id, updateProcessMapDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление карты процесса' })
  @ApiParam({ name: 'id', description: 'ID карты процесса' })
  @ApiResponse({ status: 200, description: 'Карта процесса успешно удалена' })
  @ApiResponse({ status: 404, description: 'Карта процесса не найдена' })
  remove(@Param('id') id: string) {
    return this.processMapService.remove(+id);
  }
}
