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
exports.CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const categories_on_posts_create_without_post_input_1 = require("./categories-on-posts-create-without-post.input");
const class_transformer_1 = require("class-transformer");
const categories_on_posts_create_or_connect_without_post_input_1 = require("./categories-on-posts-create-or-connect-without-post.input");
const categories_on_posts_create_many_post_input_envelope_input_1 = require("./categories-on-posts-create-many-post-input-envelope.input");
const categories_on_posts_where_unique_input_1 = require("./categories-on-posts-where-unique.input");
let CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput = class CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput {
};
exports.CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput = CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput;
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_create_without_post_input_1.CategoriesOnPostsCreateWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_without_post_input_1.CategoriesOnPostsCreateWithoutPostInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_create_or_connect_without_post_input_1.CategoriesOnPostsCreateOrConnectWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_or_connect_without_post_input_1.CategoriesOnPostsCreateOrConnectWithoutPostInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => categories_on_posts_create_many_post_input_envelope_input_1.CategoriesOnPostsCreateManyPostInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_create_many_post_input_envelope_input_1.CategoriesOnPostsCreateManyPostInputEnvelope),
    __metadata("design:type", categories_on_posts_create_many_post_input_envelope_input_1.CategoriesOnPostsCreateManyPostInputEnvelope)
], CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => categories_on_posts_where_unique_input_1.CategoriesOnPostsWhereUniqueInput),
    __metadata("design:type", Array)
], CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput.prototype, "connect", void 0);
exports.CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput = CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput = __decorate([
    (0, graphql_2.InputType)()
], CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput);
//# sourceMappingURL=categories-on-posts-unchecked-create-nested-many-without-post.input.js.map