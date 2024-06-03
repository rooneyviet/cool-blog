import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateInput } from './post-create.input';
import { PostUpdateInput } from './post-update.input';
export declare class UpsertOnePostArgs {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    create: PostCreateInput;
    update: PostUpdateInput;
}
