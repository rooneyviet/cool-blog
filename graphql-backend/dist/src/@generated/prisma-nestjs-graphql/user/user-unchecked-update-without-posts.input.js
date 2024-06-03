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
exports.UserUncheckedUpdateWithoutPostsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const enum_role_field_update_operations_input_1 = require("../prisma/enum-role-field-update-operations.input");
const like_unchecked_update_many_without_user_nested_input_1 = require("../like/like-unchecked-update-many-without-user-nested.input");
const comment_unchecked_update_many_without_user_nested_input_1 = require("../comment/comment-unchecked-update-many-without-user-nested.input");
let UserUncheckedUpdateWithoutPostsInput = class UserUncheckedUpdateWithoutPostsInput {
};
exports.UserUncheckedUpdateWithoutPostsInput = UserUncheckedUpdateWithoutPostsInput;
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "userStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_unchecked_update_many_without_user_nested_input_1.LikeUncheckedUpdateManyWithoutUserNestedInput, { nullable: true }),
    __metadata("design:type", like_unchecked_update_many_without_user_nested_input_1.LikeUncheckedUpdateManyWithoutUserNestedInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_unchecked_update_many_without_user_nested_input_1.CommentUncheckedUpdateManyWithoutUserNestedInput, { nullable: true }),
    __metadata("design:type", comment_unchecked_update_many_without_user_nested_input_1.CommentUncheckedUpdateManyWithoutUserNestedInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "comments", void 0);
exports.UserUncheckedUpdateWithoutPostsInput = UserUncheckedUpdateWithoutPostsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedUpdateWithoutPostsInput);
//# sourceMappingURL=user-unchecked-update-without-posts.input.js.map