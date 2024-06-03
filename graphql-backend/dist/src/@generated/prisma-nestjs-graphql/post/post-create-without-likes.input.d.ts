import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';
import { CategoriesOnPostsCreateNestedManyWithoutPostInput } from '../categories-on-posts/categories-on-posts-create-nested-many-without-post.input';
import { CommentCreateNestedManyWithoutPostInput } from '../comment/comment-create-nested-many-without-post.input';
export declare class PostCreateWithoutLikesInput {
    id?: string;
    url: string;
    createdAt?: Date | string;
    views?: number;
    updatedAt?: Date | string;
    published: boolean;
    title: string;
    content?: string;
    author?: UserCreateNestedOneWithoutPostsInput;
    categories?: CategoriesOnPostsCreateNestedManyWithoutPostInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
}
