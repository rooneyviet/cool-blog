import { Role } from '../prisma/role.enum';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
export declare class UserUncheckedCreateWithoutLikesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    username: string;
    userStatus?: string;
    password: string;
    role?: keyof typeof Role;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
}
