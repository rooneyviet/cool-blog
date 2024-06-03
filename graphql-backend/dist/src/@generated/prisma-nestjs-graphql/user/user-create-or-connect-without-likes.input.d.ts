import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';
export declare class UserCreateOrConnectWithoutLikesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    create: UserCreateWithoutLikesInput;
}
