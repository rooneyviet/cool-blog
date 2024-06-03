import { CategoriesOnPostsCountAggregate } from './categories-on-posts-count-aggregate.output';
import { CategoriesOnPostsMinAggregate } from './categories-on-posts-min-aggregate.output';
import { CategoriesOnPostsMaxAggregate } from './categories-on-posts-max-aggregate.output';
export declare class CategoriesOnPostsGroupBy {
    postId: string;
    categoryId: string;
    assignedAt: Date | string;
    assignedBy: string;
    _count?: CategoriesOnPostsCountAggregate;
    _min?: CategoriesOnPostsMinAggregate;
    _max?: CategoriesOnPostsMaxAggregate;
}
