import { CategoriesOnPostsCreateInput } from './categories-on-posts-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneCategoriesOnPostsArgs {
    data: CategoriesOnPostsCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
