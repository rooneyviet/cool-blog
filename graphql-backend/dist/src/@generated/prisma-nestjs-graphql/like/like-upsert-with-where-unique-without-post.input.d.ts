import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithoutPostInput } from './like-update-without-post.input';
import { LikeCreateWithoutPostInput } from './like-create-without-post.input';
export declare class LikeUpsertWithWhereUniqueWithoutPostInput {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    update: LikeUpdateWithoutPostInput;
    create: LikeCreateWithoutPostInput;
}
