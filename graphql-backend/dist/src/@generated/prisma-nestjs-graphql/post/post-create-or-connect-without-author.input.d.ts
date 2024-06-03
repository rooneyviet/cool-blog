import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
export declare class PostCreateOrConnectWithoutAuthorInput {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    create: PostCreateWithoutAuthorInput;
}
