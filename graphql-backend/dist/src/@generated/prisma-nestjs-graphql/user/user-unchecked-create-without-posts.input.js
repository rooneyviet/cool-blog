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
exports.UserUncheckedCreateWithoutPostsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Validator = require("class-validator");
const role_enum_1 = require("../prisma/role.enum");
const like_unchecked_create_nested_many_without_user_input_1 = require("../like/like-unchecked-create-nested-many-without-user.input");
const comment_unchecked_create_nested_many_without_user_input_1 = require("../comment/comment-unchecked-create-nested-many-without-user.input");
let UserUncheckedCreateWithoutPostsInput = class UserUncheckedCreateWithoutPostsInput {
};
exports.UserUncheckedCreateWithoutPostsInput = UserUncheckedCreateWithoutPostsInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutPostsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutPostsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutPostsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsNotEmpty(),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutPostsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsNotEmpty(),
    Validator.MinLength(4),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutPostsInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutPostsInput.prototype, "userStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsNotEmpty(),
    Validator.MinLength(8),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutPostsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutPostsInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_unchecked_create_nested_many_without_user_input_1.LikeUncheckedCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", like_unchecked_create_nested_many_without_user_input_1.LikeUncheckedCreateNestedManyWithoutUserInput)
], UserUncheckedCreateWithoutPostsInput.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_unchecked_create_nested_many_without_user_input_1.CommentUncheckedCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", comment_unchecked_create_nested_many_without_user_input_1.CommentUncheckedCreateNestedManyWithoutUserInput)
], UserUncheckedCreateWithoutPostsInput.prototype, "comments", void 0);
exports.UserUncheckedCreateWithoutPostsInput = UserUncheckedCreateWithoutPostsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedCreateWithoutPostsInput);
//# sourceMappingURL=user-unchecked-create-without-posts.input.js.map