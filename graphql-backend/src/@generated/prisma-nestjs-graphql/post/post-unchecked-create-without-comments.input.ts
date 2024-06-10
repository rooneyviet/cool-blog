import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput } from '../categories-on-posts/categories-on-posts-unchecked-create-nested-many-without-post.input';
import { LikeUncheckedCreateNestedManyWithoutPostInput } from '../like/like-unchecked-create-nested-many-without-post.input';

@InputType()
export class PostUncheckedCreateWithoutCommentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:true})
    views?: number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    categories?: CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput;

    @Field(() => LikeUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput;
}
