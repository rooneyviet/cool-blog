import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
export declare class PostCreateOrConnectWithoutCategoriesInput {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    create: PostCreateWithoutCategoriesInput;
}
