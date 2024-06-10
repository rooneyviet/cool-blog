import { LikeCreateInput } from './like-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneLikeArgs {
    data: LikeCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
