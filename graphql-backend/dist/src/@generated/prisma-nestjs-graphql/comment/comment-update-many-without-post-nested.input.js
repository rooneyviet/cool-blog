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
exports.CommentUpdateManyWithoutPostNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_create_without_post_input_1 = require("./comment-create-without-post.input");
const class_transformer_1 = require("class-transformer");
const comment_create_or_connect_without_post_input_1 = require("./comment-create-or-connect-without-post.input");
const comment_upsert_with_where_unique_without_post_input_1 = require("./comment-upsert-with-where-unique-without-post.input");
const comment_create_many_post_input_envelope_input_1 = require("./comment-create-many-post-input-envelope.input");
const comment_where_unique_input_1 = require("./comment-where-unique.input");
const comment_update_with_where_unique_without_post_input_1 = require("./comment-update-with-where-unique-without-post.input");
const comment_update_many_with_where_without_post_input_1 = require("./comment-update-many-with-where-without-post.input");
const comment_scalar_where_input_1 = require("./comment-scalar-where.input");
let CommentUpdateManyWithoutPostNestedInput = class CommentUpdateManyWithoutPostNestedInput {
};
exports.CommentUpdateManyWithoutPostNestedInput = CommentUpdateManyWithoutPostNestedInput;
__decorate([
    (0, graphql_1.Field)(() => [comment_create_without_post_input_1.CommentCreateWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_without_post_input_1.CommentCreateWithoutPostInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_create_or_connect_without_post_input_1.CommentCreateOrConnectWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_or_connect_without_post_input_1.CommentCreateOrConnectWithoutPostInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_upsert_with_where_unique_without_post_input_1.CommentUpsertWithWhereUniqueWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_upsert_with_where_unique_without_post_input_1.CommentUpsertWithWhereUniqueWithoutPostInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_create_many_post_input_envelope_input_1.CommentCreateManyPostInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_many_post_input_envelope_input_1.CommentCreateManyPostInputEnvelope),
    __metadata("design:type", comment_create_many_post_input_envelope_input_1.CommentCreateManyPostInputEnvelope)
], CommentUpdateManyWithoutPostNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_update_with_where_unique_without_post_input_1.CommentUpdateWithWhereUniqueWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_update_with_where_unique_without_post_input_1.CommentUpdateWithWhereUniqueWithoutPostInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_update_many_with_where_without_post_input_1.CommentUpdateManyWithWhereWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_update_many_with_where_without_post_input_1.CommentUpdateManyWithWhereWithoutPostInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_scalar_where_input_1.CommentScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_scalar_where_input_1.CommentScalarWhereInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "deleteMany", void 0);
exports.CommentUpdateManyWithoutPostNestedInput = CommentUpdateManyWithoutPostNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CommentUpdateManyWithoutPostNestedInput);
//# sourceMappingURL=comment-update-many-without-post-nested.input.js.map