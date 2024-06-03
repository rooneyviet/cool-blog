import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@ArgsType()
export class LoginArgs {
  @MinLength(6, {
    message: 'email must be at least 6 characters',
  })
  @Field(() => String, { nullable: false })
  email: string;

  @MinLength(8, {
    message: 'password must be at least 8 characters',
  })
  @Field(() => String, { nullable: false })
  password: string;
}
