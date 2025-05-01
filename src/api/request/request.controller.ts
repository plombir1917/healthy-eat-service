import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('requests')
@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  @ApiOperation({ summary: 'Создание нового запроса' })
  @ApiResponse({
    status: 201,
    description: 'Запрос успешно создан',
    type: CreateRequestDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех запросов' })
  @ApiResponse({
    status: 200,
    description: 'Список запросов успешно получен',
    type: [CreateRequestDto],
  })
  findAll() {
    return this.requestService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации о запросе по ID' })
  @ApiParam({ name: 'id', description: 'ID запроса' })
  @ApiResponse({
    status: 200,
    description: 'Информация о запросе успешно получена',
    type: CreateRequestDto,
  })
  @ApiResponse({ status: 404, description: 'Запрос не найден' })
  findOne(@Param('id') id: string) {
    return this.requestService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации о запросе' })
  @ApiParam({ name: 'id', description: 'ID запроса' })
  @ApiResponse({
    status: 200,
    description: 'Информация о запросе успешно обновлена',
    type: UpdateRequestDto,
  })
  @ApiResponse({ status: 404, description: 'Запрос не найден' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление запроса' })
  @ApiParam({ name: 'id', description: 'ID запроса' })
  @ApiResponse({ status: 200, description: 'Запрос успешно удален' })
  @ApiResponse({ status: 404, description: 'Запрос не найден' })
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }
}
