import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IsEmail, Length, MinLength, Validator } from 'class-validator';

@ArgsType()
export class RegisterArgs {
  @MinLength(6, {
    message: 'email must be at least 6 characters',
  })
  @IsEmail()
  @Field(() => String, { nullable: false })
  email: string;

  @Length(5, 20, {
    message: 'username must be between 5 and 20 characters',
  })
  @Field(() => String, { nullable: false })
  username: string;

  @Length(6, 20, {
    message: 'password must be between 6 and 20 characters',
  })
  @Field(() => String, { nullable: false })
  password: string;
}
