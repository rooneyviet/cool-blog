import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { PostCreateOrConnectWithoutCategoriesInput } from './post-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
export declare class PostCreateNestedOneWithoutCategoriesInput {
    create?: PostCreateWithoutCategoriesInput;
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput;
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
}
