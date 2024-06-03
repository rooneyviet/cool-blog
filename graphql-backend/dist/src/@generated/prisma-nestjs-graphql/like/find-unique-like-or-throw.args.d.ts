import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
export declare class FindUniqueLikeOrThrowArgs {
    where: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
}
