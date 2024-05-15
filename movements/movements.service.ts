import { Injectable } from '@nestjs/common';

@Injectable()
export class MovementsService {
  create(createMovementDto: CreateMovementDto) {
    return 'This action adds a new movement';
  }

  findAll() {
    return `This action returns all movements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movement`;
  }

  update(id: number, updateMovementDto: UpdateMovementDto) {
    return `This action updates a #${id} movement`;
  }

  remove(id: number) {
    return `This action removes a #${id} movement`;
  }
}
