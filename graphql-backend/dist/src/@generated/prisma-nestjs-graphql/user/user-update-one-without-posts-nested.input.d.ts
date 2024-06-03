import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserCreateOrConnectWithoutPostsInput } from './user-create-or-connect-without-posts.input';
import { UserUpsertWithoutPostsInput } from './user-upsert-without-posts.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPostsInput } from './user-update-to-one-with-where-without-posts.input';
export declare class UserUpdateOneWithoutPostsNestedInput {
    create?: UserCreateWithoutPostsInput;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    upsert?: UserUpsertWithoutPostsInput;
    disconnect?: UserWhereInput;
    delete?: UserWhereInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    update?: UserUpdateToOneWithWhereWithoutPostsInput;
}
