import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IllnessService } from './illness.service';
import { CreateIllnessDto } from './dto/create-illness.dto';
import { UpdateIllnessDto } from './dto/update-illness.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('illnesses')
@Controller('illness')
export class IllnessController {
  constructor(private readonly illnessService: IllnessService) {}

  @Post()
  @ApiOperation({ summary: 'Создание нового заболевания' })
  @ApiResponse({
    status: 201,
    description: 'Заболевание успешно создано',
    type: CreateIllnessDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createIllnessDto: CreateIllnessDto) {
    return this.illnessService.create(createIllnessDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех заболеваний' })
  @ApiResponse({
    status: 200,
    description: 'Список заболеваний успешно получен',
    type: [CreateIllnessDto],
  })
  findAll() {
    return this.illnessService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации о заболевании по ID' })
  @ApiParam({ name: 'id', description: 'ID заболевания' })
  @ApiResponse({
    status: 200,
    description: 'Информация о заболевании успешно получена',
    type: CreateIllnessDto,
  })
  @ApiResponse({ status: 404, description: 'Заболевание не найдено' })
  findOne(@Param('id') id: string) {
    return this.illnessService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации о заболевании' })
  @ApiParam({ name: 'id', description: 'ID заболевания' })
  @ApiResponse({
    status: 200,
    description: 'Информация о заболевании успешно обновлена',
    type: UpdateIllnessDto,
  })
  @ApiResponse({ status: 404, description: 'Заболевание не найдено' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(@Param('id') id: string, @Body() updateIllnessDto: UpdateIllnessDto) {
    return this.illnessService.update(+id, updateIllnessDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление заболевания' })
  @ApiParam({ name: 'id', description: 'ID заболевания' })
  @ApiResponse({ status: 200, description: 'Заболевание успешно удалено' })
  @ApiResponse({ status: 404, description: 'Заболевание не найдено' })
  remove(@Param('id') id: string) {
    return this.illnessService.remove(+id);
  }
}
