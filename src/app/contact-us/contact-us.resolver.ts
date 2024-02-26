import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactUsService } from './contact-us.service';
import { ContactUs } from './entities/contact-us.entity';
import { CreateContactUsInput } from './dto/create-contact-us.input';
import { UpdateContactUsInput } from './dto/update-contact-us.input';

@Resolver(() => ContactUs)
export class ContactUsResolver {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Mutation(() => ContactUs)
  createContactUs(
    @Args('createContactUsInput') createContactUsInput: CreateContactUsInput,
  ) {
    return this.contactUsService.create(createContactUsInput);
  }

  @Query(() => [ContactUs], { name: 'contactUs' })
  findAll() {
    return this.contactUsService.findAll();
  }

  @Query(() => ContactUs, { name: 'contactUs' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contactUsService.findOne(id);
  }

  @Mutation(() => ContactUs)
  updateContactUs(
    @Args('updateContactUsInput') updateContactUsInput: UpdateContactUsInput,
  ) {
    return this.contactUsService.update(
      updateContactUsInput.id,
      updateContactUsInput,
    );
  }

  @Mutation(() => ContactUs)
  removeContactUs(@Args('id', { type: () => Int }) id: number) {
    return this.contactUsService.remove(id);
  }
}
