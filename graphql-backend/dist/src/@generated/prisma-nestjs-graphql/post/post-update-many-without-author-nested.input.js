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
exports.PostUpdateManyWithoutAuthorNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_without_author_input_1 = require("./post-create-without-author.input");
const class_transformer_1 = require("class-transformer");
const post_create_or_connect_without_author_input_1 = require("./post-create-or-connect-without-author.input");
const post_upsert_with_where_unique_without_author_input_1 = require("./post-upsert-with-where-unique-without-author.input");
const post_create_many_author_input_envelope_input_1 = require("./post-create-many-author-input-envelope.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_update_with_where_unique_without_author_input_1 = require("./post-update-with-where-unique-without-author.input");
const post_update_many_with_where_without_author_input_1 = require("./post-update-many-with-where-without-author.input");
const post_scalar_where_input_1 = require("./post-scalar-where.input");
let PostUpdateManyWithoutAuthorNestedInput = class PostUpdateManyWithoutAuthorNestedInput {
};
exports.PostUpdateManyWithoutAuthorNestedInput = PostUpdateManyWithoutAuthorNestedInput;
__decorate([
    (0, graphql_1.Field)(() => [post_create_without_author_input_1.PostCreateWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_create_without_author_input_1.PostCreateWithoutAuthorInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_create_or_connect_without_author_input_1.PostCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_create_or_connect_without_author_input_1.PostCreateOrConnectWithoutAuthorInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_upsert_with_where_unique_without_author_input_1.PostUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_upsert_with_where_unique_without_author_input_1.PostUpsertWithWhereUniqueWithoutAuthorInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope),
    __metadata("design:type", post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_update_with_where_unique_without_author_input_1.PostUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_update_with_where_unique_without_author_input_1.PostUpdateWithWhereUniqueWithoutAuthorInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_update_many_with_where_without_author_input_1.PostUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_update_many_with_where_without_author_input_1.PostUpdateManyWithWhereWithoutAuthorInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_scalar_where_input_1.PostScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_scalar_where_input_1.PostScalarWhereInput),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
exports.PostUpdateManyWithoutAuthorNestedInput = PostUpdateManyWithoutAuthorNestedInput = __decorate([
    (0, graphql_2.InputType)()
], PostUpdateManyWithoutAuthorNestedInput);
//# sourceMappingURL=post-update-many-without-author-nested.input.js.map