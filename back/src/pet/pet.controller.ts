import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { PetService } from './pet.service';
import { ApiTags } from '@nestjs/swagger';
import { PetsEntity } from 'src/entidades/pets.entity';
import { CreatePetDto } from 'src/DTOS/CreatePet.dto';

@ApiTags('pet')
@Controller('pet')
export class PetController {
    constructor(private petService: PetService) { }

    @Get()
    getPet() {
        return this.petService.getPet()
    }

    @Post()
    postPet( @Body() pet: CreatePetDto) {
        return this.petService.postPet(pet)
    }

    @Put()
    putPet( @Body() pet: Partial<CreatePetDto>){
        return
    }

    @Delete(':id')
    deletePet(@Param('id', ParseUUIDPipe) id: string){
        return this.petService.deletePet(id)
    }
}
