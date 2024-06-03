import { UserService } from 'src/shared/services/user.service';
import { LoginArgs } from '../custom-data/args/login.args';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user';
export declare class AuthResolver {
    private readonly userService;
    constructor(userService: UserService);
    login(args: LoginArgs): Promise<{
        status: boolean;
        access_token: string;
        error?: undefined;
    } | {
        status: boolean;
        error: string;
        access_token?: undefined;
    }>;
    registerUser(args: UserCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
        userStatus: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
