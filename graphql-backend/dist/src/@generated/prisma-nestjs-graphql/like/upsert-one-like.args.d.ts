import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeCreateInput } from './like-create.input';
import { LikeUpdateInput } from './like-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneLikeArgs {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    create: LikeCreateInput;
    update: LikeUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
