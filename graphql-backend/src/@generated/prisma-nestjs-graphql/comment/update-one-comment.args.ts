import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentUpdateInput } from './comment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';

@ArgsType()
export class UpdateOneCommentArgs {

    @Field(() => CommentUpdateInput, {nullable:false})
    @Type(() => CommentUpdateInput)
    data!: CommentUpdateInput;

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => RelationLoadStrategy, {nullable:true})
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
