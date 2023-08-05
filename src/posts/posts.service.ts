import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from 'src/authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private authorService: AuthorsService,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async findPostById(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: {
        id,
      },
    });
  }

  createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }

  async getAuthor(userId: number): Promise<Author> {
    return this.authorService.findOne(userId);
  }

  async deletePostById(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
  
}
