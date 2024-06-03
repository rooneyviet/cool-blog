import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
export declare class DeleteOnePostArgs {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
}
