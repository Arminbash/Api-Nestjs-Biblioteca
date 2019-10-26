import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from 'src/entity/autor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutorServiceService {
    
        constructor(
            @InjectRepository(Autor)
            private readonly autorRepository: Repository<Autor>,
        ){}

        async getAll(): Promise<Autor[]>{
            return await this.autorRepository.find();
        }

}
