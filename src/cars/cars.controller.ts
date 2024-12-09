import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private carsService: CarsService) {}

    @Get()
    getAllCards() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCardById(@Param('id', ParseIntPipe) id: number) {
        console.log({id});
        
        // throw new Error('Error message');
        return {
            'car': this.carsService.findById(id)
        }
    }
}
