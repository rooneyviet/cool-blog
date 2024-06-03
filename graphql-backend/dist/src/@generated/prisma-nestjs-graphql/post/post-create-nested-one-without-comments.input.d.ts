import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';
import { PostCreateOrConnectWithoutCommentsInput } from './post-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
export declare class PostCreateNestedOneWithoutCommentsInput {
    create?: PostCreateWithoutCommentsInput;
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
}
