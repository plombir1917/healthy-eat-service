import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IllnessOnSymptomeService } from './illness_on_symptome.service';
import { CreateIllnessOnSymptomeDto } from './dto/create-illness_on_symptome.dto';
import { UpdateIllnessOnSymptomeDto } from './dto/update-illness_on_symptome.dto';

@Controller('illness-on-symptome')
export class IllnessOnSymptomeController {
  constructor(private readonly illnessOnSymptomeService: IllnessOnSymptomeService) {}

  @Post()
  create(@Body() createIllnessOnSymptomeDto: CreateIllnessOnSymptomeDto) {
    return this.illnessOnSymptomeService.create(createIllnessOnSymptomeDto);
  }

  @Get()
  findAll() {
    return this.illnessOnSymptomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.illnessOnSymptomeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIllnessOnSymptomeDto: UpdateIllnessOnSymptomeDto) {
    return this.illnessOnSymptomeService.update(+id, updateIllnessOnSymptomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.illnessOnSymptomeService.remove(+id);
  }
}
