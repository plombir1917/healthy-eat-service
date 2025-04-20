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

@Controller('illness-on-symptome')
export class IllnessOnSymptomeController {
  constructor(
    private readonly illnessOnSymptomeService: IllnessOnSymptomeService,
  ) {}

  @Post()
  create(@Body() createIllnessOnSymptomeDto: CreateIllnessOnSymptomeDto) {
    return this.illnessOnSymptomeService.create(createIllnessOnSymptomeDto);
  }

  @Get()
  findAll() {
    return this.illnessOnSymptomeService.findAll();
  }

  @Get(':illness_id/:symptome_id')
  findOne(
    @Param('illness_id') illness_id: string,
    @Param('symptome_id') symptome_id: string,
  ) {
    return this.illnessOnSymptomeService.findOne(+illness_id, +symptome_id);
  }

  @Patch(':illness_id/:symptome_id')
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
  remove(
    @Param('illness_id') illness_id: string,
    @Param('symptome_id') symptome_id: string,
  ) {
    return this.illnessOnSymptomeService.remove(+illness_id, +symptome_id);
  }
}
