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
exports.UserResolver = void 0;
const user_service_1 = require("../../shared/services/user.service");
const graphql_1 = require("@nestjs/graphql");
const user_1 = require("../../@generated/prisma-nestjs-graphql/user");
const prisma_1 = require("../../@generated/prisma-nestjs-graphql/prisma");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    findFirstUser(args) {
        this.userService.findFirst(args);
    }
    findUniqueUser(args) {
        return this.userService.findUnique(args);
    }
    listUsers(args) {
        return this.userService.findMany(args);
    }
    groupByUser(args) {
        return this.userService.groupBy(args);
    }
    aggregateUser(args) {
        return this.userService.aggregate(args);
    }
    createUser(args) {
        return this.userService.create(args);
    }
    createManyUser(args) {
        return this.userService.createMany(args);
    }
    updateUser(args) {
        return this.userService.update(args);
    }
    updateManyUser(args) {
        return this.userService.updateMany(args);
    }
    deleteUser(args) {
        return this.userService.delete(args);
    }
    deleteManyUser(args) {
        return this.userService.deleteMany(args);
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Query)(() => user_1.User, { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.FindFirstUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "findFirstUser", null);
__decorate([
    (0, graphql_1.Query)(() => user_1.User, { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.FindUniqueUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "findUniqueUser", null);
__decorate([
    (0, graphql_1.Query)(() => [user_1.User], { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.FindManyUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "listUsers", null);
__decorate([
    (0, graphql_1.Query)(() => [user_1.UserGroupBy], { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserGroupByArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "groupByUser", null);
__decorate([
    (0, graphql_1.Query)(() => user_1.AggregateUser, { nullable: false }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserAggregateArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "aggregateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_1.User, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.CreateOneUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => prisma_1.AffectedRows, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.CreateManyUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createManyUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_1.User, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UpdateOneUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => prisma_1.AffectedRows, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UpdateManyUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateManyUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_1.User, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.DeleteOneUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => prisma_1.AffectedRows, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.DeleteManyUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "deleteManyUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map