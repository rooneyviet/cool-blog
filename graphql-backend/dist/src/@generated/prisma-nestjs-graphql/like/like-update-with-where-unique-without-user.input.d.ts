import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithoutUserInput } from './like-update-without-user.input';
export declare class LikeUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    data: LikeUpdateWithoutUserInput;
}
