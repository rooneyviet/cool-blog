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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("../../shared/services/user.service");
const login_args_1 = require("../custom-data/args/login.args");
const user_1 = require("../../@generated/prisma-nestjs-graphql/user");
const LoginDataResponse_1 = require("../LoginDataResponse");
let AuthResolver = class AuthResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async login(args) {
        return this.userService.login(args);
    }
    registerUser(args) {
        const userCreateArgs = {
            data: args,
        };
        return this.userService.create(userCreateArgs);
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, graphql_1.Query)(() => LoginDataResponse_1.LoginDataResponse, { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_args_1.LoginArgs]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_1.User, { nullable: false }),
    __param(0, (0, graphql_1.Args)('registerUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserCreateInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "registerUser", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map