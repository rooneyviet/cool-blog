import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeCreateInput } from './like-create.input';
import { Type } from 'class-transformer';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';

@ArgsType()
export class CreateOneLikeArgs {

    @Field(() => LikeCreateInput, {nullable:false})
    @Type(() => LikeCreateInput)
    data!: LikeCreateInput;

    @Field(() => RelationLoadStrategy, {nullable:true})
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
