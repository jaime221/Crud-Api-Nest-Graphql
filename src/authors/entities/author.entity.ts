import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Post, (post) => post.author)
  @Field(() => [Post], { nullable: true })
  posts: Post[];
}
