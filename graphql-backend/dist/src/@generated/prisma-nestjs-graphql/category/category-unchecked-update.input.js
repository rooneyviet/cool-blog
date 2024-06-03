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
exports.CategoryUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const categories_on_posts_unchecked_update_many_without_category_nested_input_1 = require("../categories-on-posts/categories-on-posts-unchecked-update-many-without-category-nested.input");
let CategoryUncheckedUpdateInput = class CategoryUncheckedUpdateInput {
};
exports.CategoryUncheckedUpdateInput = CategoryUncheckedUpdateInput;
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CategoryUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CategoryUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CategoryUncheckedUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_unchecked_update_many_without_category_nested_input_1.CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput, { nullable: true }),
    __metadata("design:type", categories_on_posts_unchecked_update_many_without_category_nested_input_1.CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput)
], CategoryUncheckedUpdateInput.prototype, "posts", void 0);
exports.CategoryUncheckedUpdateInput = CategoryUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], CategoryUncheckedUpdateInput);
//# sourceMappingURL=category-unchecked-update.input.js.map