import { Injectable } from '@nestjs/common';
import { CreateAttatchmentInput } from './dto/create-attatchment.input';
import { UpdateAttatchmentInput } from './dto/update-attatchment.input';

@Injectable()
export class AttatchmentService {
  create(createAttatchmentInput: CreateAttatchmentInput) {
    return 'This action adds a new attatchment';
  }

  findAll() {
    return `This action returns all attatchment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attatchment`;
  }

  update(id: number, updateAttatchmentInput: UpdateAttatchmentInput) {
    return `This action updates a #${id} attatchment`;
  }

  remove(id: number) {
    return `This action removes a #${id} attatchment`;
  }
}
