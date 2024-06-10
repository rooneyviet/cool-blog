import { PostCreateInput } from './post-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOnePostArgs {
    data: PostCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
