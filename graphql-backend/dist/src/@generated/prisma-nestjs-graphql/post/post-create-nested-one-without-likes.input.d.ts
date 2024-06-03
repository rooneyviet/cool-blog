import { PostCreateWithoutLikesInput } from './post-create-without-likes.input';
import { PostCreateOrConnectWithoutLikesInput } from './post-create-or-connect-without-likes.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
export declare class PostCreateNestedOneWithoutLikesInput {
    create?: PostCreateWithoutLikesInput;
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput;
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
}
