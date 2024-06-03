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
exports.UpdateManyPostArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_update_many_mutation_input_1 = require("./post-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const post_where_input_1 = require("./post-where.input");
let UpdateManyPostArgs = class UpdateManyPostArgs {
};
exports.UpdateManyPostArgs = UpdateManyPostArgs;
__decorate([
    (0, graphql_1.Field)(() => post_update_many_mutation_input_1.PostUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_update_many_mutation_input_1.PostUpdateManyMutationInput),
    __metadata("design:type", post_update_many_mutation_input_1.PostUpdateManyMutationInput)
], UpdateManyPostArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_input_1.PostWhereInput),
    __metadata("design:type", post_where_input_1.PostWhereInput)
], UpdateManyPostArgs.prototype, "where", void 0);
exports.UpdateManyPostArgs = UpdateManyPostArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyPostArgs);
//# sourceMappingURL=update-many-post.args.js.map