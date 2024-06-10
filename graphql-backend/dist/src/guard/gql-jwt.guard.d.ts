import { ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/shared/services/user.service';
declare const GqlJWTGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlJWTGuard extends GqlJWTGuard_base {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
