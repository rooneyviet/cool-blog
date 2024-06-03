import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserWhereInput } from './user-where.input';
export declare class UserUpsertWithoutCommentsInput {
    update: UserUpdateWithoutCommentsInput;
    create: UserCreateWithoutCommentsInput;
    where?: UserWhereInput;
}
