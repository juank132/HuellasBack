import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetsEntity } from 'src/entidades/pets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetRepository {
    constructor(@InjectRepository(PetsEntity)
    private readonly petsRepository: Repository<PetsEntity>) { }

    async getPet() {
        const pets: PetsEntity[] = await this.petsRepository.find();
        if (!pets) {
            throw new Error("Error al cargar las mascotas")
        };
        return pets;
    }

    async postPet(pet) {
        const newPet = await this.petsRepository.create(pet);

        if (!newPet) {
            throw new Error("Error al crear la mascota")
        };

        const savePet = await this.petsRepository.save(newPet);

        return savePet;
    }

    async deletePet(id) {
        const pet: PetsEntity = await this.petsRepository.findOne({where: {id}});

        if (!pet) {
            throw new Error('No se encontro la mascota seleccionada')
        };

        await this.petsRepository.remove(pet)

        return `La mascota "${pet.name}" se elimino correctamente`
    }
}
