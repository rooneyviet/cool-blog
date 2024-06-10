import { CommentCreateInput } from './comment-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneCommentArgs {
    data: CommentCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
