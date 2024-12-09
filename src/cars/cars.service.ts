import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'BMW',
            color: 'black',
            model: 'M5'
        },
        {
            id: 2,
            brand: 'Mercedes',
            color: 'white',
            model: 'S600'
        },
        {
            id: 3,
            brand: 'Audi',
            color: 'red',
            model: 'A8'
        }
    ];

    public findAll() {
        return this.cars;
    }

    public findById(id: string) {
        return this.cars[id];
    }

}
