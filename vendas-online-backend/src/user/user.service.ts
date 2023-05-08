import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async createUser(createUserDto: CreateUserDTO): Promise<UserEntity> {
        const saltOrRounds = 10
        const passwordHashed = await hash(createUserDto.password, saltOrRounds)
        const user = {
            ...createUserDto,
            typeUser: 1,
            password: passwordHashed
        }

        return this.userRepository.save(user)
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find()
    }
}
