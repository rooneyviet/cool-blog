import { Role } from '../prisma/role.enum';
export declare class UserCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    username: string;
    userStatus?: string;
    password: string;
    role?: keyof typeof Role;
}