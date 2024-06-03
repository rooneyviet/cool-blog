import { PostCreateNestedOneWithoutLikesInput } from '../post/post-create-nested-one-without-likes.input';
export declare class LikeCreateWithoutUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    post: PostCreateNestedOneWithoutLikesInput;
}
