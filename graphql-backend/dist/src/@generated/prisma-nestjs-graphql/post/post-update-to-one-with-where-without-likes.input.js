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
exports.PostUpdateToOneWithWhereWithoutLikesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
const class_transformer_1 = require("class-transformer");
const post_update_without_likes_input_1 = require("./post-update-without-likes.input");
let PostUpdateToOneWithWhereWithoutLikesInput = class PostUpdateToOneWithWhereWithoutLikesInput {
};
exports.PostUpdateToOneWithWhereWithoutLikesInput = PostUpdateToOneWithWhereWithoutLikesInput;
__decorate([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_input_1.PostWhereInput),
    __metadata("design:type", post_where_input_1.PostWhereInput)
], PostUpdateToOneWithWhereWithoutLikesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_update_without_likes_input_1.PostUpdateWithoutLikesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_update_without_likes_input_1.PostUpdateWithoutLikesInput),
    __metadata("design:type", post_update_without_likes_input_1.PostUpdateWithoutLikesInput)
], PostUpdateToOneWithWhereWithoutLikesInput.prototype, "data", void 0);
exports.PostUpdateToOneWithWhereWithoutLikesInput = PostUpdateToOneWithWhereWithoutLikesInput = __decorate([
    (0, graphql_2.InputType)()
], PostUpdateToOneWithWhereWithoutLikesInput);
//# sourceMappingURL=post-update-to-one-with-where-without-likes.input.js.map