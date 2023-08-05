import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from 'src/authors/entities/author.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ type: 'text', nullable: true })
  @Field()
  content: string;

  @Column()
  @Field(() => Int)
  authorId: number;

  @ManyToOne(() => Author, (author) => author.posts)
  @Field(() => Author)
  author: Author;
}
