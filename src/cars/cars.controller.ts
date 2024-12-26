import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('cars')
export class CarsController {

    constructor(private carsService: CarsService) {}

    
    @Get()
    getAllCards() 
    {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCardById(@Param('id', ParseUUIDPipe) id: string) 
    {
        return {
            'car': this.carsService.findById(id)
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCard(@Body() createCardDto: CreateCardDto)
    {
        return createCardDto
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
