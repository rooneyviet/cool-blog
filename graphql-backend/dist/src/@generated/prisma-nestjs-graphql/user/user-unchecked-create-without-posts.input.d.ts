import { Role } from '../prisma/role.enum';
import { LikeUncheckedCreateNestedManyWithoutUserInput } from '../like/like-unchecked-create-nested-many-without-user.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
export declare class UserUncheckedCreateWithoutPostsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    username: string;
    userStatus?: string;
    password: string;
    role?: keyof typeof Role;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
}
