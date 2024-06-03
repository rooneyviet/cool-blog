import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeCreateInput } from './like-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneLikeArgs {

    @Field(() => LikeCreateInput, {nullable:false})
    @Type(() => LikeCreateInput)
    @ValidateNested()
    @Type(() => LikeCreateInput)
    data!: LikeCreateInput;
}
