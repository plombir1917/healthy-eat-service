import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('patients')
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiOperation({ summary: 'Создание нового пациента' })
  @ApiResponse({
    status: 201,
    description: 'Пациент успешно создан',
    type: CreatePatientDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех пациентов' })
  @ApiResponse({
    status: 200,
    description: 'Список пациентов успешно получен',
    type: [CreatePatientDto],
  })
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации о пациенте по ID' })
  @ApiParam({ name: 'id', description: 'ID пациента' })
  @ApiResponse({
    status: 200,
    description: 'Информация о пациенте успешно получена',
    type: CreatePatientDto,
  })
  @ApiResponse({ status: 404, description: 'Пациент не найден' })
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации о пациенте' })
  @ApiParam({ name: 'id', description: 'ID пациента' })
  @ApiResponse({
    status: 200,
    description: 'Информация о пациенте успешно обновлена',
    type: UpdatePatientDto,
  })
  @ApiResponse({ status: 404, description: 'Пациент не найден' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление пациента' })
  @ApiParam({ name: 'id', description: 'ID пациента' })
  @ApiResponse({ status: 200, description: 'Пациент успешно удален' })
  @ApiResponse({ status: 404, description: 'Пациент не найден' })
  remove(@Param('id') id: string) {
    return this.patientService.delete(+id);
  }
}
