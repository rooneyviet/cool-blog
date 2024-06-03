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
exports.UpdateManyLikeArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const like_update_many_mutation_input_1 = require("./like-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const like_where_input_1 = require("./like-where.input");
let UpdateManyLikeArgs = class UpdateManyLikeArgs {
};
exports.UpdateManyLikeArgs = UpdateManyLikeArgs;
__decorate([
    (0, graphql_1.Field)(() => like_update_many_mutation_input_1.LikeUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => like_update_many_mutation_input_1.LikeUpdateManyMutationInput),
    __metadata("design:type", like_update_many_mutation_input_1.LikeUpdateManyMutationInput)
], UpdateManyLikeArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_where_input_1.LikeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => like_where_input_1.LikeWhereInput),
    __metadata("design:type", like_where_input_1.LikeWhereInput)
], UpdateManyLikeArgs.prototype, "where", void 0);
exports.UpdateManyLikeArgs = UpdateManyLikeArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyLikeArgs);
//# sourceMappingURL=update-many-like.args.js.map