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
exports.CommentUpdateManyWithWhereWithoutPostInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_scalar_where_input_1 = require("./comment-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const comment_update_many_mutation_input_1 = require("./comment-update-many-mutation.input");
let CommentUpdateManyWithWhereWithoutPostInput = class CommentUpdateManyWithWhereWithoutPostInput {
};
exports.CommentUpdateManyWithWhereWithoutPostInput = CommentUpdateManyWithWhereWithoutPostInput;
__decorate([
    (0, graphql_1.Field)(() => comment_scalar_where_input_1.CommentScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_scalar_where_input_1.CommentScalarWhereInput),
    __metadata("design:type", comment_scalar_where_input_1.CommentScalarWhereInput)
], CommentUpdateManyWithWhereWithoutPostInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_update_many_mutation_input_1.CommentUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_update_many_mutation_input_1.CommentUpdateManyMutationInput),
    __metadata("design:type", comment_update_many_mutation_input_1.CommentUpdateManyMutationInput)
], CommentUpdateManyWithWhereWithoutPostInput.prototype, "data", void 0);
exports.CommentUpdateManyWithWhereWithoutPostInput = CommentUpdateManyWithWhereWithoutPostInput = __decorate([
    (0, graphql_2.InputType)()
], CommentUpdateManyWithWhereWithoutPostInput);
//# sourceMappingURL=comment-update-many-with-where-without-post.input.js.map