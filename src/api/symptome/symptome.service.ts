import { Injectable } from '@nestjs/common';
import { CreateSymptomeDto } from './dto/create-symptome.dto';
import { UpdateSymptomeDto } from './dto/update-symptome.dto';

@Injectable()
export class SymptomeService {
  create(createSymptomeDto: CreateSymptomeDto) {
    return 'This action adds a new symptome';
  }

  findAll() {
    return `This action returns all symptome`;
  }

  findOne(id: number) {
    return `This action returns a #${id} symptome`;
  }

  update(id: number, updateSymptomeDto: UpdateSymptomeDto) {
    return `This action updates a #${id} symptome`;
  }

  remove(id: number) {
    return `This action removes a #${id} symptome`;
  }
}
