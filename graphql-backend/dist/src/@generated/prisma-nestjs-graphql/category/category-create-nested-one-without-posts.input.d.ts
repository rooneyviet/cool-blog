import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { CategoryCreateOrConnectWithoutPostsInput } from './category-create-or-connect-without-posts.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
export declare class CategoryCreateNestedOneWithoutPostsInput {
    create?: CategoryCreateWithoutPostsInput;
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput;
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
