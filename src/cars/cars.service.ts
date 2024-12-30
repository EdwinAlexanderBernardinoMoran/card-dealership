import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './interfaces/card.interface';
import { v4 as uuid } from 'uuid';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CarsService {
    private cars: Card[] = [
        {
            id: uuid(),
            brand: 'BMW',
            model: 'M5'
        },
        {
            id: uuid(),
            brand: 'Mercedes',
            model: 'S600'
        },
        {
            id: uuid(),
            brand: 'Audi',
            model: 'A8'
        }
    ];

    public findAll() {
        return this.cars;
    }

    public findById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car;
    }

    public create(createCardDto: CreateCardDto) {
        const car: Card = {
            id: uuid(),
            ...createCardDto
        };

        this.cars.push(car);

        return car;
    }
}
