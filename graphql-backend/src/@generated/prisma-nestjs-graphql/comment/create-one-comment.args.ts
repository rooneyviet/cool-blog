import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentCreateInput } from './comment-create.input';
import { Type } from 'class-transformer';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';

@ArgsType()
export class CreateOneCommentArgs {

    @Field(() => CommentCreateInput, {nullable:false})
    @Type(() => CommentCreateInput)
    data!: CommentCreateInput;

    @Field(() => RelationLoadStrategy, {nullable:true})
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
