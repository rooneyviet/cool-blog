import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';
import { UserCreateOrConnectWithoutLikesInput } from './user-create-or-connect-without-likes.input';
import { UserUpsertWithoutLikesInput } from './user-upsert-without-likes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLikesInput } from './user-update-to-one-with-where-without-likes.input';
export declare class UserUpdateOneRequiredWithoutLikesNestedInput {
    create?: UserCreateWithoutLikesInput;
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput;
    upsert?: UserUpsertWithoutLikesInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    update?: UserUpdateToOneWithWhereWithoutLikesInput;
}
