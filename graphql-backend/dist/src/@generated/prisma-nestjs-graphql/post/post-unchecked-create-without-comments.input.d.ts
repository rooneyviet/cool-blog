import { CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput } from '../categories-on-posts/categories-on-posts-unchecked-create-nested-many-without-post.input';
import { LikeUncheckedCreateNestedManyWithoutPostInput } from '../like/like-unchecked-create-nested-many-without-post.input';
export declare class PostUncheckedCreateWithoutCommentsInput {
    id?: string;
    url?: string;
    createdAt?: Date | string;
    views?: number;
    updatedAt?: Date | string;
    published: boolean;
    title: string;
    content: string;
    authorId?: string;
    categories?: CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput;
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput;
}
