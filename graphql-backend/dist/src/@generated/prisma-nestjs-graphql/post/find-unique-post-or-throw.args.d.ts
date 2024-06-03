import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
export declare class FindUniquePostOrThrowArgs {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
}
