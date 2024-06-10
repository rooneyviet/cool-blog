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
exports.CommentCreateNestedManyWithoutPostInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_create_without_post_input_1 = require("./comment-create-without-post.input");
const class_transformer_1 = require("class-transformer");
const comment_create_or_connect_without_post_input_1 = require("./comment-create-or-connect-without-post.input");
const comment_create_many_post_input_envelope_input_1 = require("./comment-create-many-post-input-envelope.input");
const comment_where_unique_input_1 = require("./comment-where-unique.input");
let CommentCreateNestedManyWithoutPostInput = class CommentCreateNestedManyWithoutPostInput {
};
exports.CommentCreateNestedManyWithoutPostInput = CommentCreateNestedManyWithoutPostInput;
__decorate([
    (0, graphql_1.Field)(() => [comment_create_without_post_input_1.CommentCreateWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_without_post_input_1.CommentCreateWithoutPostInput),
    __metadata("design:type", Array)
], CommentCreateNestedManyWithoutPostInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_create_or_connect_without_post_input_1.CommentCreateOrConnectWithoutPostInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_or_connect_without_post_input_1.CommentCreateOrConnectWithoutPostInput),
    __metadata("design:type", Array)
], CommentCreateNestedManyWithoutPostInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_create_many_post_input_envelope_input_1.CommentCreateManyPostInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_many_post_input_envelope_input_1.CommentCreateManyPostInputEnvelope),
    __metadata("design:type", comment_create_many_post_input_envelope_input_1.CommentCreateManyPostInputEnvelope)
], CommentCreateNestedManyWithoutPostInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentCreateNestedManyWithoutPostInput.prototype, "connect", void 0);
exports.CommentCreateNestedManyWithoutPostInput = CommentCreateNestedManyWithoutPostInput = __decorate([
    (0, graphql_2.InputType)()
], CommentCreateNestedManyWithoutPostInput);
//# sourceMappingURL=comment-create-nested-many-without-post.input.js.map