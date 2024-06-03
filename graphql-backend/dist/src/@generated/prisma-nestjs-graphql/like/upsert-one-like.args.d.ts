import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeCreateInput } from './like-create.input';
import { LikeUpdateInput } from './like-update.input';
export declare class UpsertOneLikeArgs {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    create: LikeCreateInput;
    update: LikeUpdateInput;
}
