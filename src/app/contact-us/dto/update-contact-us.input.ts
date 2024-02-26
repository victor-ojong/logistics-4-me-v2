import { CreateContactUsInput } from './create-contact-us.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactUsInput extends PartialType(CreateContactUsInput) {
  @Field(() => Int)
  id: number;
}
