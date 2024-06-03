import { PostUpdateInput } from './post-update.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
export declare class UpdateOnePostArgs {
    data: PostUpdateInput;
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
}
