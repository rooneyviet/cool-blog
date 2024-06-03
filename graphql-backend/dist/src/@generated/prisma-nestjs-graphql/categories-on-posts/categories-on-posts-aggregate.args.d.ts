import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { CategoriesOnPostsOrderByWithRelationInput } from './categories-on-posts-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsCountAggregateInput } from './categories-on-posts-count-aggregate.input';
import { CategoriesOnPostsMinAggregateInput } from './categories-on-posts-min-aggregate.input';
import { CategoriesOnPostsMaxAggregateInput } from './categories-on-posts-max-aggregate.input';
export declare class CategoriesOnPostsAggregateArgs {
    where?: CategoriesOnPostsWhereInput;
    orderBy?: Array<CategoriesOnPostsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    take?: number;
    skip?: number;
    _count?: CategoriesOnPostsCountAggregateInput;
    _min?: CategoriesOnPostsMinAggregateInput;
    _max?: CategoriesOnPostsMaxAggregateInput;
}
