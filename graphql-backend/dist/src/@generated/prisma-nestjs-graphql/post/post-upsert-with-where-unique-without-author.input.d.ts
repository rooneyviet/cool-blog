import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithoutAuthorInput } from './post-update-without-author.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
export declare class PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    update: PostUpdateWithoutAuthorInput;
    create: PostCreateWithoutAuthorInput;
}
