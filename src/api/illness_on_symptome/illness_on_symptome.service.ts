import { Injectable } from '@nestjs/common';
import { CreateIllnessOnSymptomeDto } from './dto/create-illness_on_symptome.dto';
import { UpdateIllnessOnSymptomeDto } from './dto/update-illness_on_symptome.dto';

@Injectable()
export class IllnessOnSymptomeService {
  create(createIllnessOnSymptomeDto: CreateIllnessOnSymptomeDto) {
    return 'This action adds a new illnessOnSymptome';
  }

  findAll() {
    return `This action returns all illnessOnSymptome`;
  }

  findOne(id: number) {
    return `This action returns a #${id} illnessOnSymptome`;
  }

  update(id: number, updateIllnessOnSymptomeDto: UpdateIllnessOnSymptomeDto) {
    return `This action updates a #${id} illnessOnSymptome`;
  }

  remove(id: number) {
    return `This action removes a #${id} illnessOnSymptome`;
  }
}
