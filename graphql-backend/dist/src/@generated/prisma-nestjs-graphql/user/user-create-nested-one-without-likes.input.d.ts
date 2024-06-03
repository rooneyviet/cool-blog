import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';
import { UserCreateOrConnectWithoutLikesInput } from './user-create-or-connect-without-likes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutLikesInput {
    create?: UserCreateWithoutLikesInput;
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
