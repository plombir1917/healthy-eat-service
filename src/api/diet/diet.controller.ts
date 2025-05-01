import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DietService } from './diet.service';
import { CreateDietDto } from './dto/create-diet.dto';
import { UpdateDietDto } from './dto/update-diet.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('diets')
@Controller('diet')
export class DietController {
  constructor(private readonly dietService: DietService) {}

  @Post()
  @ApiOperation({ summary: 'Создание новой диеты' })
  @ApiResponse({
    status: 201,
    description: 'Диета успешно создана',
    type: CreateDietDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createDietDto: CreateDietDto) {
    return this.dietService.create(createDietDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех диет' })
  @ApiResponse({
    status: 200,
    description: 'Список диет успешно получен',
    type: [CreateDietDto],
  })
  findAll() {
    return this.dietService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации о диете по ID' })
  @ApiParam({ name: 'id', description: 'ID диеты' })
  @ApiResponse({
    status: 200,
    description: 'Информация о диете успешно получена',
    type: CreateDietDto,
  })
  @ApiResponse({ status: 404, description: 'Диета не найдена' })
  findOne(@Param('id') id: string) {
    return this.dietService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации о диете' })
  @ApiParam({ name: 'id', description: 'ID диеты' })
  @ApiResponse({
    status: 200,
    description: 'Информация о диете успешно обновлена',
    type: UpdateDietDto,
  })
  @ApiResponse({ status: 404, description: 'Диета не найдена' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(@Param('id') id: string, @Body() updateDietDto: UpdateDietDto) {
    return this.dietService.update(+id, updateDietDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление диеты' })
  @ApiParam({ name: 'id', description: 'ID диеты' })
  @ApiResponse({ status: 200, description: 'Диета успешно удалена' })
  @ApiResponse({ status: 404, description: 'Диета не найдена' })
  remove(@Param('id') id: string) {
    return this.dietService.remove(+id);
  }
}
