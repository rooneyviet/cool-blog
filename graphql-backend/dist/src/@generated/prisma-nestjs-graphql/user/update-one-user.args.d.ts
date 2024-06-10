import { UserUpdateInput } from './user-update.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneUserArgs {
    data: UserUpdateInput;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
