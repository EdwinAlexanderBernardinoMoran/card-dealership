import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './interfaces/card.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
    private cars: Card[] = [
        {
            id: uuid(),
            brand: 'BMW',
            color: 'black',
            model: 'M5'
        },
        {
            id: uuid(),
            brand: 'Mercedes',
            color: 'white',
            model: 'S600'
        },
        {
            id: uuid(),
            brand: 'Audi',
            color: 'red',
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
    

}
