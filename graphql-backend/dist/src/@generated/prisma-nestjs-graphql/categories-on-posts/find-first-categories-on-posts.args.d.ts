import { CategoriesOnPostsWhereInput } from './categories-on-posts-where.input';
import { CategoriesOnPostsOrderByWithRelationInput } from './categories-on-posts-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CategoriesOnPostsWhereUniqueInput } from './categories-on-posts-where-unique.input';
import { CategoriesOnPostsScalarFieldEnum } from './categories-on-posts-scalar-field.enum';
export declare class FindFirstCategoriesOnPostsArgs {
    where?: CategoriesOnPostsWhereInput;
    orderBy?: Array<CategoriesOnPostsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CategoriesOnPostsWhereUniqueInput, 'postId_categoryId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CategoriesOnPostsScalarFieldEnum>;
}
