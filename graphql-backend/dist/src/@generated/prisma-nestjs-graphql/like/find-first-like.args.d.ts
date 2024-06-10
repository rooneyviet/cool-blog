import { LikeWhereInput } from './like-where.input';
import { LikeOrderByWithRelationInput } from './like-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeScalarFieldEnum } from './like-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstLikeArgs {
    where?: LikeWhereInput;
    orderBy?: Array<LikeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LikeScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
