import { CategoryCreateInput } from './category-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneCategoryArgs {
    data: CategoryCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
