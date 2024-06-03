import { BaseCrudService } from './base.service';
import { User, Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginArgs } from 'src/graphql-api/custom-data/args/login.args';
export declare class UserService extends BaseCrudService<User, Prisma.UserFindFirstArgs, Prisma.UserFindUniqueArgs, Prisma.UserFindManyArgs, Prisma.UserGroupByArgs, Prisma.UserAggregateArgs, Prisma.UserCreateArgs, Prisma.UserCreateManyArgs, Prisma.UserUpdateArgs, Prisma.UserUpdateManyArgs, Prisma.UserDeleteArgs, Prisma.UserDeleteManyArgs> {
    readonly jwtService: JwtService;
    private saltRounds;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(args: LoginArgs): Promise<{
        status: boolean;
        access_token: string;
        error?: undefined;
    } | {
        status: boolean;
        error: string;
        access_token?: undefined;
    }>;
    create(args: Prisma.UserCreateArgs): Promise<User | undefined>;
    createMany(args: Prisma.UserCreateManyArgs): Promise<Prisma.BatchPayload>;
    update(args: Prisma.UserUpdateArgs): Promise<User>;
    updateMany(args: Prisma.UserUpdateManyArgs): Promise<any>;
}
