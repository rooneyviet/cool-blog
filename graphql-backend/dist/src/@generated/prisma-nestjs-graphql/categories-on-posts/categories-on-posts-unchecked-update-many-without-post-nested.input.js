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
exports.CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const categories_on_posts_create_without_post_input_1 = require("./categories-on-posts-create-without-post.input");
const class_transformer_1 = require("class-transformer");
const categories_on_posts_create_or_connect_without_post_input_1 = require("./categories-on-posts-create-or-connect-without-post.input");
const categories_on_posts_upsert_with_where_unique_without_post_input_1 = require("./categories-on-posts-upsert-with-where-unique-without-post.input");
const categories_on_posts_create_many_post_input_envelope_input_1 = require("./categories-on-posts-create-many-post-input-envelope.input");
const categories_on_posts_where_unique_input_1 = require("./categories-on-posts-where-unique.input");
const categories_on_posts_update_with_where_unique_without_post_input_1 = require("./categories-on-posts-update-with-where-unique-without-post.input");
const categories_on_posts_update_many_with_where_without_post_input_1 = require("./categories-on-posts-update-many-with-where-without-post.input");
const categories_on_posts_scalar_where_input_1 = require("./categories-on-posts-scalar-where.input");
let CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput = class CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput {
};
exports.CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput = CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput;
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_create_without_post_input_1.CategoriesOnPostsCreateWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_without_post_input_1.CategoriesOnPostsCreateWithoutPostInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_create_or_connect_without_post_input_1.CategoriesOnPostsCreateOrConnectWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_or_connect_without_post_input_1.CategoriesOnPostsCreateOrConnectWithoutPostInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_upsert_with_where_unique_without_post_input_1.CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_upsert_with_where_unique_without_post_input_1.CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_create_many_post_input_envelope_input_1.CategoriesOnPostsCreateManyPostInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_many_post_input_envelope_input_1.CategoriesOnPostsCreateManyPostInputEnvelope),
    __metadata("design:type", categories_on_posts_create_many_post_input_envelope_input_1.CategoriesOnPostsCreateManyPostInputEnvelope)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_update_with_where_unique_without_post_input_1.CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_update_with_where_unique_without_post_input_1.CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_update_many_with_where_without_post_input_1.CategoriesOnPostsUpdateManyWithWhereWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_update_many_with_where_without_post_input_1.CategoriesOnPostsUpdateManyWithWhereWithoutPostInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_scalar_where_input_1.CategoriesOnPostsScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_scalar_where_input_1.CategoriesOnPostsScalarWhereInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput.prototype, "deleteMany", void 0);
exports.CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput = CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput);
//# sourceMappingURL=categories-on-posts-unchecked-update-many-without-post-nested.input.js.map