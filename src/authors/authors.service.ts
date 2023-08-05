import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorRepository: Repository<Author>,
  ) {}

  create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const author = this.authorRepository.create(createAuthorInput);
    return this.authorRepository.save(author);
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne({
      where: {
        id,
      },
    });
  }
  
  async deleteAuthorById(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
