import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithoutUserInput } from './like-update-without-user.input';
import { LikeCreateWithoutUserInput } from './like-create-without-user.input';
export declare class LikeUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    update: LikeUpdateWithoutUserInput;
    create: LikeCreateWithoutUserInput;
}
