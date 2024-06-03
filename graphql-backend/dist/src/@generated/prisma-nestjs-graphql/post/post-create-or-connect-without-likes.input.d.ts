import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateWithoutLikesInput } from './post-create-without-likes.input';
export declare class PostCreateOrConnectWithoutLikesInput {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    create: PostCreateWithoutLikesInput;
}
