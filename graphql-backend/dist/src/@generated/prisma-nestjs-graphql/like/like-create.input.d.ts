import { UserCreateNestedOneWithoutLikesInput } from '../user/user-create-nested-one-without-likes.input';
import { PostCreateNestedOneWithoutLikesInput } from '../post/post-create-nested-one-without-likes.input';
export declare class LikeCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutLikesInput;
    post: PostCreateNestedOneWithoutLikesInput;
}
