import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('characteristics')
@Controller('characteristic')
export class CharacteristicController {
  constructor(private readonly characteristicService: CharacteristicService) {}

  @Post()
  @ApiOperation({ summary: 'Создание новой характеристики' })
  @ApiResponse({
    status: 201,
    description: 'Характеристика успешно создана',
    type: CreateCharacteristicDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createCharacteristicDto: CreateCharacteristicDto) {
    return this.characteristicService.create(createCharacteristicDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех характеристик' })
  @ApiResponse({
    status: 200,
    description: 'Список характеристик успешно получен',
    type: [CreateCharacteristicDto],
  })
  findAll() {
    return this.characteristicService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации о характеристике по ID' })
  @ApiParam({ name: 'id', description: 'ID характеристики' })
  @ApiResponse({
    status: 200,
    description: 'Информация о характеристике успешно получена',
    type: CreateCharacteristicDto,
  })
  @ApiResponse({ status: 404, description: 'Характеристика не найдена' })
  findOne(@Param('id') id: string) {
    return this.characteristicService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации о характеристике' })
  @ApiParam({ name: 'id', description: 'ID характеристики' })
  @ApiResponse({
    status: 200,
    description: 'Информация о характеристике успешно обновлена',
    type: UpdateCharacteristicDto,
  })
  @ApiResponse({ status: 404, description: 'Характеристика не найдена' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(
    @Param('id') id: string,
    @Body() updateCharacteristicDto: UpdateCharacteristicDto,
  ) {
    return this.characteristicService.update(+id, updateCharacteristicDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление характеристики' })
  @ApiParam({ name: 'id', description: 'ID характеристики' })
  @ApiResponse({ status: 200, description: 'Характеристика успешно удалена' })
  @ApiResponse({ status: 404, description: 'Характеристика не найдена' })
  remove(@Param('id') id: string) {
    return this.characteristicService.remove(+id);
  }
}
