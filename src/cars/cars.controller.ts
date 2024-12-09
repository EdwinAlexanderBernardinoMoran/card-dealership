import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private carsService: CarsService) {}

    @Get()
    getAllCards() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCardById(@Param('id') id: string) {
        return {
            'car': this.carsService.findById(id)
        }
    }
}
