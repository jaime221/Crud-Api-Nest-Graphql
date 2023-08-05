import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver,ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile:join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type :'sqlite',
      database :'database.sqlite',
      entities : [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize : true,
    }),
    PostsModule,
    AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
