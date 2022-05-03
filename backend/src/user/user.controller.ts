import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateUserDto } from './create_user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from './user.service';


@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    async getUsers() {
        return this.userService.findAll();
    }
    
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
    
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }
}
