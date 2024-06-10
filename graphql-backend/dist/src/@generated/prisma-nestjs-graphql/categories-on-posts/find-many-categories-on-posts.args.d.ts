import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { CategoriesOnPostsOrderByWithRelationInput } from './categories-on-posts-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsScalarFieldEnum } from './categories-on-posts-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindManyCategoriesOnPostsArgs {
    where?: CategoriesOnPostsWhereInput;
    orderBy?: Array<CategoriesOnPostsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CategoriesOnPostsScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
