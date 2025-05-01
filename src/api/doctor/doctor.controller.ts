import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('doctors')
@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  @ApiOperation({ summary: 'Создание нового врача' })
  @ApiResponse({
    status: 201,
    description: 'Врач успешно создан',
    type: CreateDoctorDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех врачей' })
  @ApiResponse({
    status: 200,
    description: 'Список врачей успешно получен',
    type: [CreateDoctorDto],
  })
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации о враче по ID' })
  @ApiParam({ name: 'id', description: 'ID врача' })
  @ApiResponse({
    status: 200,
    description: 'Информация о враче успешно получена',
    type: CreateDoctorDto,
  })
  @ApiResponse({ status: 404, description: 'Врач не найден' })
  findOne(@Param('id') id: string) {
    return this.doctorService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации о враче' })
  @ApiParam({ name: 'id', description: 'ID врача' })
  @ApiResponse({
    status: 200,
    description: 'Информация о враче успешно обновлена',
    type: UpdateDoctorDto,
  })
  @ApiResponse({ status: 404, description: 'Врач не найден' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление врача' })
  @ApiParam({ name: 'id', description: 'ID врача' })
  @ApiResponse({ status: 200, description: 'Врач успешно удален' })
  @ApiResponse({ status: 404, description: 'Врач не найден' })
  remove(@Param('id') id: string) {
    return this.doctorService.remove(+id);
  }
}
