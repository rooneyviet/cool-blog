import { LikeUpdateInput } from './like-update.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
export declare class UpdateOneLikeArgs {
    data: LikeUpdateInput;
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
}
