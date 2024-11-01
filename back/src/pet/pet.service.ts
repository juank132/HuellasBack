import { Injectable } from '@nestjs/common';
import { PetRepository } from './pet.repository';

@Injectable()
export class PetService {
    constructor(private readonly petRepository: PetRepository) { }
    
    getPet() {
        return this.petRepository.getPet()
    }

    postPet(pet) {
        return this.petRepository.postPet(pet)
    }

    deletePet(id) {
        return this.petRepository.deletePet(id)
    }
}
