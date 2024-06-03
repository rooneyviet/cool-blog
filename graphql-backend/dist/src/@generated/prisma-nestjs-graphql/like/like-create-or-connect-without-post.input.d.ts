import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeCreateWithoutPostInput } from './like-create-without-post.input';
export declare class LikeCreateOrConnectWithoutPostInput {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    create: LikeCreateWithoutPostInput;
}
