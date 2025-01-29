import { Card } from "src/cars/interfaces/card.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Card[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla',
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic',
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Accord',
    },
    {
        id: uuid(),
        brand: 'BMW',
        model: 'M3',
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee',
    },
    {
        id: uuid(),
        brand: 'Mitshubishi',
        model: 'Lancer',
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Camaro',
    },
]