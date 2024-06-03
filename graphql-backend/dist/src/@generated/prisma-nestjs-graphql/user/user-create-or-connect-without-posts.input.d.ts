import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
export declare class UserCreateOrConnectWithoutPostsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    create: UserCreateWithoutPostsInput;
}
