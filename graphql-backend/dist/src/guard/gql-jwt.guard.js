"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlJWTGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const user_service_1 = require("../shared/services/user.service");
let GqlJWTGuard = class GqlJWTGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(userService, jwtService) {
        super();
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        const token = req.headers.authorization?.split('Bearer ')[1];
        if (!token) {
            throw new common_1.UnauthorizedException('Invalid Token');
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_SECRET,
            });
            const userData = await this.userService.findFirst({
                where: { id: { equals: payload.id ?? '' } },
            });
            req.user = userData;
            return true;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.GqlJWTGuard = GqlJWTGuard;
exports.GqlJWTGuard = GqlJWTGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], GqlJWTGuard);
//# sourceMappingURL=gql-jwt.guard.js.map