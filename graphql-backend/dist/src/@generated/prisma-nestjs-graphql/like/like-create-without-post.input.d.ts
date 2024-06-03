import { UserCreateNestedOneWithoutLikesInput } from '../user/user-create-nested-one-without-likes.input';
export declare class LikeCreateWithoutPostInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutLikesInput;
}
