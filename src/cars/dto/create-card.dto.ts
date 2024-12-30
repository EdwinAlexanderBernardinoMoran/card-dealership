import { IsString, MinLength } from "class-validator";

export class CreateCardDto {

    @IsString({ message: 'Brand must be a string' })
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;
}