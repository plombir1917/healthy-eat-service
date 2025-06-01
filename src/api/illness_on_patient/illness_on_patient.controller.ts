import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IllnessOnPatientService } from './illness_on_patient.service';
import { CreateIllnessOnPatientDto } from './dto/create-illness_on_patient.dto';
import { UpdateIllnessOnPatientDto } from './dto/update-illness_on_patient.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('illness-on-patient')
@Controller('illness-on-patient')
export class IllnessOnPatientController {
  constructor(
    private readonly illnessOnPatientService: IllnessOnPatientService,
  ) {}

  @ApiOperation({ summary: 'Добавить заболевание пациенту' })
  @Post()
  create(@Body() createIllnessOnPatientDto: CreateIllnessOnPatientDto) {
    return this.illnessOnPatientService.create(createIllnessOnPatientDto);
  }

  @ApiOperation({ summary: 'Получить все заболевания пациентов' })
  @Get()
  findAll() {
    return this.illnessOnPatientService.findAll();
  }

  @ApiOperation({
    summary: 'Получить заболевание пациента по ID заболевания и ID пациента',
  })
  @Get(':illness_id/:patient_id')
  findOne(
    @Param('illness_id') illness_id: string,
    @Param('patient_id') patient_id: string,
  ) {
    return this.illnessOnPatientService.findOne(+illness_id, +patient_id);
  }

  @ApiOperation({
    summary: 'Обновить заболевание пациента по ID заболевания и ID пациента',
  })
  @Patch(':illness_id/:patient_id')
  update(
    @Param('illness_id') illness_id: string,
    @Param('patient_id') patient_id: string,
    @Body() updateIllnessOnPatientDto: UpdateIllnessOnPatientDto,
  ) {
    return this.illnessOnPatientService.update(
      +illness_id,
      +patient_id,
      updateIllnessOnPatientDto,
    );
  }

  @ApiOperation({
    summary: 'Удалить заболевание пациента по ID заболевания и ID пациента',
  })
  @Delete(':illness_id/:patient_id')
  remove(
    @Param('illness_id') illness_id: string,
    @Param('patient_id') patient_id: string,
  ) {
    return this.illnessOnPatientService.remove(+illness_id, +patient_id);
  }
}
