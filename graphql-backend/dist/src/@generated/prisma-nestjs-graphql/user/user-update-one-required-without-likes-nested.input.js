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
exports.UserUpdateOneRequiredWithoutLikesNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_likes_input_1 = require("./user-create-without-likes.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_likes_input_1 = require("./user-create-or-connect-without-likes.input");
const user_upsert_without_likes_input_1 = require("./user-upsert-without-likes.input");
const client_1 = require("@prisma/client");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_to_one_with_where_without_likes_input_1 = require("./user-update-to-one-with-where-without-likes.input");
let UserUpdateOneRequiredWithoutLikesNestedInput = class UserUpdateOneRequiredWithoutLikesNestedInput {
};
exports.UserUpdateOneRequiredWithoutLikesNestedInput = UserUpdateOneRequiredWithoutLikesNestedInput;
__decorate([
    (0, graphql_1.Field)(() => user_create_without_likes_input_1.UserCreateWithoutLikesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_likes_input_1.UserCreateWithoutLikesInput),
    __metadata("design:type", user_create_without_likes_input_1.UserCreateWithoutLikesInput)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_likes_input_1.UserCreateOrConnectWithoutLikesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_likes_input_1.UserCreateOrConnectWithoutLikesInput),
    __metadata("design:type", user_create_or_connect_without_likes_input_1.UserCreateOrConnectWithoutLikesInput)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_upsert_without_likes_input_1.UserUpsertWithoutLikesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_upsert_without_likes_input_1.UserUpsertWithoutLikesInput),
    __metadata("design:type", user_upsert_without_likes_input_1.UserUpsertWithoutLikesInput)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_to_one_with_where_without_likes_input_1.UserUpdateToOneWithWhereWithoutLikesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_to_one_with_where_without_likes_input_1.UserUpdateToOneWithWhereWithoutLikesInput),
    __metadata("design:type", user_update_to_one_with_where_without_likes_input_1.UserUpdateToOneWithWhereWithoutLikesInput)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutLikesNestedInput = UserUpdateOneRequiredWithoutLikesNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateOneRequiredWithoutLikesNestedInput);
//# sourceMappingURL=user-update-one-required-without-likes-nested.input.js.map