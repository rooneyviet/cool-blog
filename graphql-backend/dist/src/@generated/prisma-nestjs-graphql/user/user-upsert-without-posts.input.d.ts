import { UserUpdateWithoutPostsInput } from './user-update-without-posts.input';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserWhereInput } from './user-where.input';
export declare class UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsInput;
    create: UserCreateWithoutPostsInput;
    where?: UserWhereInput;
}
