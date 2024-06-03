import { Role } from '../prisma/role.enum';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
export declare class UserCreateWithoutLikesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    username: string;
    userStatus?: string;
    password: string;
    role?: keyof typeof Role;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    comments?: CommentCreateNestedManyWithoutUserInput;
}
