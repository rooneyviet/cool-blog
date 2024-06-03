import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
export declare class CategoryCreateOrConnectWithoutPostsInput {
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    create: CategoryCreateWithoutPostsInput;
}
