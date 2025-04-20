import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProcessMapService } from './process-map.service';
import { CreateProcessMapDto } from './dto/create-process-map.dto';
import { UpdateProcessMapDto } from './dto/update-process-map.dto';

@Controller('process-map')
export class ProcessMapController {
  constructor(private readonly processMapService: ProcessMapService) {}

  @Post()
  create(@Body() createProcessMapDto: CreateProcessMapDto) {
    return this.processMapService.create(createProcessMapDto);
  }

  @Get()
  findAll() {
    return this.processMapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.processMapService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProcessMapDto: UpdateProcessMapDto,
  ) {
    return this.processMapService.update(+id, updateProcessMapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.processMapService.remove(+id);
  }
}
