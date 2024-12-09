import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ok } from 'assert';

@Controller('cars')
export class CarsController {

    constructor(private carsService: CarsService) {}

    
    @Get()
    getAllCards() 
    {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCardById(@Param('id', ParseIntPipe) id: number) 
    {
        return {
            'car': this.carsService.findById(id)
        }
    }

    @Post()
    createCard(@Body() body: any)
    {
        return body
    }

    @Patch(':id')
    updateCAr(@Param('id', ParseIntPipe) id:number, @Body() body: any)
    {
        return body
    }

    @Delete(':id')
    deleteCard(@Param('id', ParseIntPipe) id: number)
    {
        return {
            method: 'delete',
            id: id
        }
    }
}
