import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsEntity } from 'src/entidades/pets.entity';
import { PetRepository } from './pet.repository';

@Module({
  imports:[TypeOrmModule.forFeature([PetsEntity])],
  controllers: [PetController],
  providers: [PetService, PetRepository]
})
export class PetModule {}
