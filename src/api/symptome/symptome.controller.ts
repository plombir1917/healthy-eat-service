import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SymptomeService } from './symptome.service';
import { CreateSymptomeDto } from './dto/create-symptome.dto';
import { UpdateSymptomeDto } from './dto/update-symptome.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('symptoms')
@Controller('symptome')
export class SymptomeController {
  constructor(private readonly symptomeService: SymptomeService) {}

  @Post()
  @ApiOperation({ summary: 'Создание нового симптома' })
  @ApiResponse({
    status: 201,
    description: 'Симптом успешно создан',
    type: CreateSymptomeDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createSymptomeDto: CreateSymptomeDto) {
    return this.symptomeService.create(createSymptomeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех симптомов' })
  @ApiResponse({
    status: 200,
    description: 'Список симптомов успешно получен',
    type: [CreateSymptomeDto],
  })
  findAll() {
    return this.symptomeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации о симптоме по ID' })
  @ApiParam({ name: 'id', description: 'ID симптома' })
  @ApiResponse({
    status: 200,
    description: 'Информация о симптоме успешно получена',
    type: CreateSymptomeDto,
  })
  @ApiResponse({ status: 404, description: 'Симптом не найден' })
  findOne(@Param('id') id: string) {
    return this.symptomeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации о симптоме' })
  @ApiParam({ name: 'id', description: 'ID симптома' })
  @ApiResponse({
    status: 200,
    description: 'Информация о симптоме успешно обновлена',
    type: UpdateSymptomeDto,
  })
  @ApiResponse({ status: 404, description: 'Симптом не найден' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(
    @Param('id') id: string,
    @Body() updateSymptomeDto: UpdateSymptomeDto,
  ) {
    return this.symptomeService.update(+id, updateSymptomeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление симптома' })
  @ApiParam({ name: 'id', description: 'ID симптома' })
  @ApiResponse({ status: 200, description: 'Симптом успешно удален' })
  @ApiResponse({ status: 404, description: 'Симптом не найден' })
  remove(@Param('id') id: string) {
    return this.symptomeService.remove(+id);
  }
}
