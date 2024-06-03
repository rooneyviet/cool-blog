import { Role } from '../prisma/role.enum';
import { LikeCreateNestedManyWithoutUserInput } from '../like/like-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
export declare class UserCreateWithoutPostsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    username: string;
    userStatus?: string;
    password: string;
    role?: keyof typeof Role;
    likes?: LikeCreateNestedManyWithoutUserInput;
    comments?: CommentCreateNestedManyWithoutUserInput;
}
