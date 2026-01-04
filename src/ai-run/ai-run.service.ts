import { Injectable } from '@nestjs/common';
import { CreateAiRunInput } from './dto/create-ai-run.input';
import { UpdateAiRunInput } from './dto/update-ai-run.input';

@Injectable()
export class AiRunService {
  create(createAiRunInput: CreateAiRunInput) {
    return 'This action adds a new aiRun';
  }

  findAll() {
    return `This action returns all aiRun`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiRun`;
  }

  update(id: number, updateAiRunInput: UpdateAiRunInput) {
    return `This action updates a #${id} aiRun`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiRun`;
  }
}
