import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class Recipe {
  @Field((type) => ID, { nullable: false })
  id: string = '';

  @Directive('@upper')
  title: string = '';

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date = new Date();

  @Field((type) => [String])
  ingredients: string[] = [];
}
