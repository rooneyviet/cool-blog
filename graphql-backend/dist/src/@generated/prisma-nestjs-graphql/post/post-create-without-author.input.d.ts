import { CategoriesOnPostsCreateNestedManyWithoutPostInput } from '../categories-on-posts/categories-on-posts-create-nested-many-without-post.input';
import { LikeCreateNestedManyWithoutPostInput } from '../like/like-create-nested-many-without-post.input';
import { CommentCreateNestedManyWithoutPostInput } from '../comment/comment-create-nested-many-without-post.input';
export declare class PostCreateWithoutAuthorInput {
    id?: string;
    url: string;
    createdAt?: Date | string;
    views?: number;
    updatedAt?: Date | string;
    published: boolean;
    title: string;
    content?: string;
    categories?: CategoriesOnPostsCreateNestedManyWithoutPostInput;
    likes?: LikeCreateNestedManyWithoutPostInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
}
