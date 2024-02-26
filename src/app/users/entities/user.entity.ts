import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User {
  @Field(() => Int)
  @Prop({ required: true })
  id: number;

  @Field()
  @Prop({ required: true })
  firstName: string;

  @Field()
  @Prop({ required: true })
  lastName: string;

  @Field()
  @Prop({ required: true })
  email: string;

  @Field()
  @Prop({ required: true })
  age: number;
}

export const CatSchema = SchemaFactory.createForClass(User);
