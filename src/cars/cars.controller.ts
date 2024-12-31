import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

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
    // @UsePipes(ValidationPipe)
    createCard(@Body() createCardDto: CreateCardDto)
    {
        return this.carsService.create(createCardDto);
    }

    @Patch(':id')
    updateCAr(@Param('id', ParseUUIDPipe) id:string, @Body() updateCardDto: UpdateCardDto)
    {
        return this.carsService.update(id, updateCardDto);
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
