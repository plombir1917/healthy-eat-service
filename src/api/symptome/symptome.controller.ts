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

@Controller('symptome')
export class SymptomeController {
  constructor(private readonly symptomeService: SymptomeService) {}

  @Post()
  create(@Body() createSymptomeDto: CreateSymptomeDto) {
    return this.symptomeService.create(createSymptomeDto);
  }

  @Get()
  findAll() {
    return this.symptomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.symptomeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSymptomeDto: UpdateSymptomeDto,
  ) {
    return this.symptomeService.update(+id, updateSymptomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.symptomeService.remove(+id);
  }
}
