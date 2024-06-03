import { UserUpdateWithoutLikesInput } from './user-update-without-likes.input';
import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';
import { UserWhereInput } from './user-where.input';
export declare class UserUpsertWithoutLikesInput {
    update: UserUpdateWithoutLikesInput;
    create: UserCreateWithoutLikesInput;
    where?: UserWhereInput;
}
