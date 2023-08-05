import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { Author } from './entities/author.entity';
import {TypeOrmModule} from '@nestjs/typeorm'
@Module({
  imports:[TypeOrmModule.forFeature([Author])],
  providers: [AuthorsResolver, AuthorsService],
  exports : [AuthorsService]
})
export class AuthorsModule {}
