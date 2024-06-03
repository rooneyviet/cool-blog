import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { CategoryCreateOrConnectWithoutPostsInput } from './category-create-or-connect-without-posts.input';
import { CategoryUpsertWithoutPostsInput } from './category-upsert-without-posts.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutPostsInput } from './category-update-to-one-with-where-without-posts.input';
export declare class CategoryUpdateOneRequiredWithoutPostsNestedInput {
    create?: CategoryCreateWithoutPostsInput;
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput;
    upsert?: CategoryUpsertWithoutPostsInput;
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    update?: CategoryUpdateToOneWithWhereWithoutPostsInput;
}
