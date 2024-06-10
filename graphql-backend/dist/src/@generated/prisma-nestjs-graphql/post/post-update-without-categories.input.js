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
exports.PostUpdateWithoutCategoriesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const bool_field_update_operations_input_1 = require("../prisma/bool-field-update-operations.input");
const user_update_one_without_posts_nested_input_1 = require("../user/user-update-one-without-posts-nested.input");
const like_update_many_without_post_nested_input_1 = require("../like/like-update-many-without-post-nested.input");
const comment_update_many_without_post_nested_input_1 = require("../comment/comment-update-many-without-post-nested.input");
let PostUpdateWithoutCategoriesInput = class PostUpdateWithoutCategoriesInput {
};
exports.PostUpdateWithoutCategoriesInput = PostUpdateWithoutCategoriesInput;
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutCategoriesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutCategoriesInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutCategoriesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], PostUpdateWithoutCategoriesInput.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutCategoriesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutCategoriesInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutCategoriesInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutCategoriesInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_without_posts_nested_input_1.UserUpdateOneWithoutPostsNestedInput, { nullable: true }),
    __metadata("design:type", user_update_one_without_posts_nested_input_1.UserUpdateOneWithoutPostsNestedInput)
], PostUpdateWithoutCategoriesInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_update_many_without_post_nested_input_1.LikeUpdateManyWithoutPostNestedInput, { nullable: true }),
    __metadata("design:type", like_update_many_without_post_nested_input_1.LikeUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutCategoriesInput.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_update_many_without_post_nested_input_1.CommentUpdateManyWithoutPostNestedInput, { nullable: true }),
    __metadata("design:type", comment_update_many_without_post_nested_input_1.CommentUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutCategoriesInput.prototype, "comments", void 0);
exports.PostUpdateWithoutCategoriesInput = PostUpdateWithoutCategoriesInput = __decorate([
    (0, graphql_2.InputType)()
], PostUpdateWithoutCategoriesInput);
//# sourceMappingURL=post-update-without-categories.input.js.map