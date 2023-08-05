import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength,IsInt } from 'class-validator';

@InputType()
export class CreatePostInput {
  @MaxLength(10, { message: 'El título no puede tener más de 10 caracteres' })
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @Field()
  title: string;

  @MaxLength(50, {
    message: 'El contenido no puede tener más de 50 caracteres',
  })
  @IsNotEmpty({ message: 'El contenido no puede estar vacío' })
  @Field()
  content: string;

  @IsInt()
  @Field()
  authorId : number
}
