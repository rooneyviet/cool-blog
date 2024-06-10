import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';

@ArgsType()
export class FindUniqueCommentOrThrowArgs {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => RelationLoadStrategy, {nullable:true})
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}