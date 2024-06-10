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
exports.UpsertOneUserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const user_where_unique_input_1 = require("./user-where-unique.input");
const class_transformer_1 = require("class-transformer");
const user_create_input_1 = require("./user-create.input");
const user_update_input_1 = require("./user-update.input");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let UpsertOneUserArgs = class UpsertOneUserArgs {
};
exports.UpsertOneUserArgs = UpsertOneUserArgs;
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Object)
], UpsertOneUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_input_1.UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_create_input_1.UserCreateInput),
    __metadata("design:type", user_create_input_1.UserCreateInput)
], UpsertOneUserArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_input_1.UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_update_input_1.UserUpdateInput),
    __metadata("design:type", user_update_input_1.UserUpdateInput)
], UpsertOneUserArgs.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true }),
    __metadata("design:type", Object)
], UpsertOneUserArgs.prototype, "relationLoadStrategy", void 0);
exports.UpsertOneUserArgs = UpsertOneUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneUserArgs);
//# sourceMappingURL=upsert-one-user.args.js.map