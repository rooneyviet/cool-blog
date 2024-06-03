import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';
export declare class PostCreateOrConnectWithoutCommentsInput {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    create: PostCreateWithoutCommentsInput;
}
