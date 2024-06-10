import { PostCreateNestedOneWithoutCommentsInput } from '../post/post-create-nested-one-without-comments.input';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
export declare class CommentCreateInput {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    post: PostCreateNestedOneWithoutCommentsInput;
    user: UserCreateNestedOneWithoutCommentsInput;
}
