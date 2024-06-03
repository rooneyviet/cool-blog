import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeCreateWithoutUserInput } from './like-create-without-user.input';
export declare class LikeCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    create: LikeCreateWithoutUserInput;
}
