import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class DeleteOnePostArgs {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'url'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
