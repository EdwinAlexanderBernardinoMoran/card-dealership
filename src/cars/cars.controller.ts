import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    @Get()
    getAllCards() {
        return this.cars;
    }

    @Get(':id')
    getCardById(@Param('id') id: string) {
        return {
            'car': this.cars[id]
        }
    }
}
