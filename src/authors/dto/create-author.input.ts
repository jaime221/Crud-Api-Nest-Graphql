import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field()
  name: string;
}
