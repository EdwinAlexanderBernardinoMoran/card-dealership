import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './interfaces/card.interface';
import { v4 as uuid } from 'uuid';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

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

    public update(id: string, UpdateCardDto: UpdateCardDto) {
        let carDB = this.findById(id);

        if (UpdateCardDto.id && UpdateCardDto.id !== id) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...UpdateCardDto,
                    id
                };

                return carDB;
            }

            return car;
        });
        return carDB;
    }

    public delete(id: string) {
        const car = this.findById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
}
