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
exports.UserUpdateOneWithoutPostsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_posts_input_1 = require("./user-create-without-posts.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_posts_input_1 = require("./user-create-or-connect-without-posts.input");
const user_upsert_without_posts_input_1 = require("./user-upsert-without-posts.input");
const user_where_input_1 = require("./user-where.input");
const client_1 = require("@prisma/client");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_to_one_with_where_without_posts_input_1 = require("./user-update-to-one-with-where-without-posts.input");
let UserUpdateOneWithoutPostsNestedInput = class UserUpdateOneWithoutPostsNestedInput {
};
exports.UserUpdateOneWithoutPostsNestedInput = UserUpdateOneWithoutPostsNestedInput;
__decorate([
    (0, graphql_1.Field)(() => user_create_without_posts_input_1.UserCreateWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_posts_input_1.UserCreateWithoutPostsInput),
    __metadata("design:type", user_create_without_posts_input_1.UserCreateWithoutPostsInput)
], UserUpdateOneWithoutPostsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_posts_input_1.UserCreateOrConnectWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_posts_input_1.UserCreateOrConnectWithoutPostsInput),
    __metadata("design:type", user_create_or_connect_without_posts_input_1.UserCreateOrConnectWithoutPostsInput)
], UserUpdateOneWithoutPostsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_upsert_without_posts_input_1.UserUpsertWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_upsert_without_posts_input_1.UserUpsertWithoutPostsInput),
    __metadata("design:type", user_upsert_without_posts_input_1.UserUpsertWithoutPostsInput)
], UserUpdateOneWithoutPostsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], UserUpdateOneWithoutPostsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], UserUpdateOneWithoutPostsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Object)
], UserUpdateOneWithoutPostsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_to_one_with_where_without_posts_input_1.UserUpdateToOneWithWhereWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_to_one_with_where_without_posts_input_1.UserUpdateToOneWithWhereWithoutPostsInput),
    __metadata("design:type", user_update_to_one_with_where_without_posts_input_1.UserUpdateToOneWithWhereWithoutPostsInput)
], UserUpdateOneWithoutPostsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneWithoutPostsNestedInput = UserUpdateOneWithoutPostsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateOneWithoutPostsNestedInput);
//# sourceMappingURL=user-update-one-without-posts-nested.input.js.map