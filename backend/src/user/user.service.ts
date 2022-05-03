import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create_user.dto';
import { User } from './user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOneBy({id});
    }

    create(body: CreateUserDto): Promise<User> {
        const user: User = new User();
        user.name = body.name;
        return this.usersRepository.save(User);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
