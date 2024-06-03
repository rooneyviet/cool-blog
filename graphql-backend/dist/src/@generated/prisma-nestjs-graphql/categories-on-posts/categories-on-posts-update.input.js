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
exports.CategoriesOnPostsUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const post_update_one_required_without_categories_nested_input_1 = require("../post/post-update-one-required-without-categories-nested.input");
const category_update_one_required_without_posts_nested_input_1 = require("../category/category-update-one-required-without-posts-nested.input");
let CategoriesOnPostsUpdateInput = class CategoriesOnPostsUpdateInput {
};
exports.CategoriesOnPostsUpdateInput = CategoriesOnPostsUpdateInput;
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CategoriesOnPostsUpdateInput.prototype, "assignedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CategoriesOnPostsUpdateInput.prototype, "assignedBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_update_one_required_without_categories_nested_input_1.PostUpdateOneRequiredWithoutCategoriesNestedInput, { nullable: true }),
    __metadata("design:type", post_update_one_required_without_categories_nested_input_1.PostUpdateOneRequiredWithoutCategoriesNestedInput)
], CategoriesOnPostsUpdateInput.prototype, "post", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_update_one_required_without_posts_nested_input_1.CategoryUpdateOneRequiredWithoutPostsNestedInput, { nullable: true }),
    __metadata("design:type", category_update_one_required_without_posts_nested_input_1.CategoryUpdateOneRequiredWithoutPostsNestedInput)
], CategoriesOnPostsUpdateInput.prototype, "category", void 0);
exports.CategoriesOnPostsUpdateInput = CategoriesOnPostsUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsUpdateInput);
//# sourceMappingURL=categories-on-posts-update.input.js.map