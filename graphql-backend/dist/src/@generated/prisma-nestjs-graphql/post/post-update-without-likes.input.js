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
exports.PostUpdateWithoutLikesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const bool_field_update_operations_input_1 = require("../prisma/bool-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const user_update_one_without_posts_nested_input_1 = require("../user/user-update-one-without-posts-nested.input");
const categories_on_posts_update_many_without_post_nested_input_1 = require("../categories-on-posts/categories-on-posts-update-many-without-post-nested.input");
const comment_update_many_without_post_nested_input_1 = require("../comment/comment-update-many-without-post-nested.input");
let PostUpdateWithoutLikesInput = class PostUpdateWithoutLikesInput {
};
exports.PostUpdateWithoutLikesInput = PostUpdateWithoutLikesInput;
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutLikesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutLikesInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutLikesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], PostUpdateWithoutLikesInput.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutLikesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutLikesInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutLikesInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutLikesInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_without_posts_nested_input_1.UserUpdateOneWithoutPostsNestedInput, { nullable: true }),
    __metadata("design:type", user_update_one_without_posts_nested_input_1.UserUpdateOneWithoutPostsNestedInput)
], PostUpdateWithoutLikesInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_update_many_without_post_nested_input_1.CategoriesOnPostsUpdateManyWithoutPostNestedInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_update_many_without_post_nested_input_1.CategoriesOnPostsUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutLikesInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_update_many_without_post_nested_input_1.CommentUpdateManyWithoutPostNestedInput, { nullable: true }),
    __metadata("design:type", comment_update_many_without_post_nested_input_1.CommentUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutLikesInput.prototype, "comments", void 0);
exports.PostUpdateWithoutLikesInput = PostUpdateWithoutLikesInput = __decorate([
    (0, graphql_2.InputType)()
], PostUpdateWithoutLikesInput);
//# sourceMappingURL=post-update-without-likes.input.js.map