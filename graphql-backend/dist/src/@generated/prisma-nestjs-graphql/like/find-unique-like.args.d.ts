import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
export declare class FindUniqueLikeArgs {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
}
