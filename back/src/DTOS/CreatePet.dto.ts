import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePetDto {

    @IsOptional()
    @IsString()
    @ApiProperty()
    name?: string;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    sexo: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    breed: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    species: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    age: number;

    @IsOptional()
    @IsString()
    @ApiProperty()
    month?: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    description?: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    pet_size: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    imgUrl?: string;

    @IsOptional()
    @ArrayNotEmpty()
    @IsString({ each: true })
    listImg?: string[];

    @IsOptional()
    @IsString()
    @ApiProperty()
    godfather?: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    isCondition?: string;

    @IsOptional()
    @IsBoolean()
    @ApiProperty()
    isActive: boolean;

}