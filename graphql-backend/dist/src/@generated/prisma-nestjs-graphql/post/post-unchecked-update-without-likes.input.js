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
exports.PostUncheckedUpdateWithoutLikesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const bool_field_update_operations_input_1 = require("../prisma/bool-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const categories_on_posts_unchecked_update_many_without_post_nested_input_1 = require("../categories-on-posts/categories-on-posts-unchecked-update-many-without-post-nested.input");
const comment_unchecked_update_many_without_post_nested_input_1 = require("../comment/comment-unchecked-update-many-without-post-nested.input");
let PostUncheckedUpdateWithoutLikesInput = class PostUncheckedUpdateWithoutLikesInput {
};
exports.PostUncheckedUpdateWithoutLikesInput = PostUncheckedUpdateWithoutLikesInput;
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_unchecked_update_many_without_post_nested_input_1.CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_unchecked_update_many_without_post_nested_input_1.CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_unchecked_update_many_without_post_nested_input_1.CommentUncheckedUpdateManyWithoutPostNestedInput, { nullable: true }),
    __metadata("design:type", comment_unchecked_update_many_without_post_nested_input_1.CommentUncheckedUpdateManyWithoutPostNestedInput)
], PostUncheckedUpdateWithoutLikesInput.prototype, "comments", void 0);
exports.PostUncheckedUpdateWithoutLikesInput = PostUncheckedUpdateWithoutLikesInput = __decorate([
    (0, graphql_2.InputType)()
], PostUncheckedUpdateWithoutLikesInput);
//# sourceMappingURL=post-unchecked-update-without-likes.input.js.map