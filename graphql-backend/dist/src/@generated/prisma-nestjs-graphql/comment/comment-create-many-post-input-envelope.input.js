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
exports.CommentCreateManyPostInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_create_many_post_input_1 = require("./comment-create-many-post.input");
const class_transformer_1 = require("class-transformer");
let CommentCreateManyPostInputEnvelope = class CommentCreateManyPostInputEnvelope {
};
exports.CommentCreateManyPostInputEnvelope = CommentCreateManyPostInputEnvelope;
__decorate([
    (0, graphql_1.Field)(() => [comment_create_many_post_input_1.CommentCreateManyPostInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_create_many_post_input_1.CommentCreateManyPostInput),
    __metadata("design:type", Array)
], CommentCreateManyPostInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentCreateManyPostInputEnvelope.prototype, "skipDuplicates", void 0);
exports.CommentCreateManyPostInputEnvelope = CommentCreateManyPostInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], CommentCreateManyPostInputEnvelope);
//# sourceMappingURL=comment-create-many-post-input-envelope.input.js.map