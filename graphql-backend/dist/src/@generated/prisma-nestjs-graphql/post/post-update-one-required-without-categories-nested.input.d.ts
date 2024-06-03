import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { PostCreateOrConnectWithoutCategoriesInput } from './post-create-or-connect-without-categories.input';
import { PostUpsertWithoutCategoriesInput } from './post-upsert-without-categories.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutCategoriesInput } from './post-update-to-one-with-where-without-categories.input';
export declare class PostUpdateOneRequiredWithoutCategoriesNestedInput {
    create?: PostCreateWithoutCategoriesInput;
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput;
    upsert?: PostUpsertWithoutCategoriesInput;
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    update?: PostUpdateToOneWithWhereWithoutCategoriesInput;
}
