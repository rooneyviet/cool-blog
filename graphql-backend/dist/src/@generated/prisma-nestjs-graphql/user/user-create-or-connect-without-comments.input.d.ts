import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
export declare class UserCreateOrConnectWithoutCommentsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    create: UserCreateWithoutCommentsInput;
}
