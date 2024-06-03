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
exports.PostCreateManyAuthorInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_many_author_input_1 = require("./post-create-many-author.input");
const class_transformer_1 = require("class-transformer");
let PostCreateManyAuthorInputEnvelope = class PostCreateManyAuthorInputEnvelope {
};
exports.PostCreateManyAuthorInputEnvelope = PostCreateManyAuthorInputEnvelope;
__decorate([
    (0, graphql_1.Field)(() => [post_create_many_author_input_1.PostCreateManyAuthorInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => post_create_many_author_input_1.PostCreateManyAuthorInput),
    __metadata("design:type", Array)
], PostCreateManyAuthorInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PostCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
exports.PostCreateManyAuthorInputEnvelope = PostCreateManyAuthorInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], PostCreateManyAuthorInputEnvelope);
//# sourceMappingURL=post-create-many-author-input-envelope.input.js.map