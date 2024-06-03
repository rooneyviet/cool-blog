import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithoutPostInput } from './like-update-without-post.input';
export declare class LikeUpdateWithWhereUniqueWithoutPostInput {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    data: LikeUpdateWithoutPostInput;
}
