import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateInput } from './user-create.input';
import { UserUpdateInput } from './user-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';

@ArgsType()
export class UpsertOneUserArgs {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: UserCreateInput;

    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: UserUpdateInput;

    @Field(() => RelationLoadStrategy, {nullable:true})
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
