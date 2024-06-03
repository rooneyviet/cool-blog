import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithoutAuthorInput } from './post-update-without-author.input';
export declare class PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    data: PostUpdateWithoutAuthorInput;
}
