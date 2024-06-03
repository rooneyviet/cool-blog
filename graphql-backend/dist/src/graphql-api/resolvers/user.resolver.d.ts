import { UserService } from 'src/shared/services/user.service';
import { CreateManyUserArgs, CreateOneUserArgs, DeleteManyUserArgs, DeleteOneUserArgs, FindFirstUserArgs, FindManyUserArgs, FindUniqueUserArgs, UpdateManyUserArgs, UpdateOneUserArgs, UserAggregateArgs, UserGroupByArgs } from 'src/@generated/prisma-nestjs-graphql/user';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    findFirstUser(args: FindFirstUserArgs): void;
    findUniqueUser(args: FindUniqueUserArgs): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
        userStatus: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    listUsers(args: FindManyUserArgs): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
        userStatus: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    groupByUser(args: UserGroupByArgs): any;
    aggregateUser(args: UserAggregateArgs): any;
    createUser(args: CreateOneUserArgs): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
        userStatus: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    createManyUser(args: CreateManyUserArgs): Promise<import(".prisma/client").Prisma.BatchPayload>;
    updateUser(args: UpdateOneUserArgs): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
        userStatus: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    updateManyUser(args: UpdateManyUserArgs): Promise<any>;
    deleteUser(args: DeleteOneUserArgs): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
        userStatus: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    deleteManyUser(args: DeleteManyUserArgs): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
        userStatus: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
}
