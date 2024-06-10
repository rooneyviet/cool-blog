import { UserCreateInput } from './user-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneUserArgs {
    data: UserCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
