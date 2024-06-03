import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from 'src/shared/services/user.service';
import { LoginArgs } from '../custom-data/args/login.args';
import {
  CreateOneUserArgs,
  User,
  UserCreateInput,
} from 'src/@generated/prisma-nestjs-graphql/user';
import { LoginDataResponse } from '../LoginDataResponse';
@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => LoginDataResponse, { nullable: false })
  async login(@Args() args: LoginArgs) {
    return this.userService.login(args);
  }
  @Mutation(() => User, { nullable: false })
  registerUser(@Args('registerUser') args: UserCreateInput) {
    const userCreateArgs: CreateOneUserArgs = {
      data: args,
    };
    return this.userService.create(userCreateArgs);
  }
}
