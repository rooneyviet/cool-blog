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
exports.CommentAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_where_input_1 = require("./comment-where.input");
const class_transformer_1 = require("class-transformer");
const comment_order_by_with_relation_input_1 = require("./comment-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const comment_where_unique_input_1 = require("./comment-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const comment_count_aggregate_input_1 = require("./comment-count-aggregate.input");
const comment_min_aggregate_input_1 = require("./comment-min-aggregate.input");
const comment_max_aggregate_input_1 = require("./comment-max-aggregate.input");
let CommentAggregateArgs = class CommentAggregateArgs {
};
exports.CommentAggregateArgs = CommentAggregateArgs;
__decorate([
    (0, graphql_1.Field)(() => comment_where_input_1.CommentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_input_1.CommentWhereInput),
    __metadata("design:type", comment_where_input_1.CommentWhereInput)
], CommentAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_order_by_with_relation_input_1.CommentOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_where_unique_input_1.CommentWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], CommentAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommentAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommentAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_count_aggregate_input_1.CommentCountAggregateInput, { nullable: true }),
    __metadata("design:type", comment_count_aggregate_input_1.CommentCountAggregateInput)
], CommentAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_min_aggregate_input_1.CommentMinAggregateInput, { nullable: true }),
    __metadata("design:type", comment_min_aggregate_input_1.CommentMinAggregateInput)
], CommentAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_max_aggregate_input_1.CommentMaxAggregateInput, { nullable: true }),
    __metadata("design:type", comment_max_aggregate_input_1.CommentMaxAggregateInput)
], CommentAggregateArgs.prototype, "_max", void 0);
exports.CommentAggregateArgs = CommentAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CommentAggregateArgs);
//# sourceMappingURL=comment-aggregate.args.js.map