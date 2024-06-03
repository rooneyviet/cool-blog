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
exports.LikeAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const like_where_input_1 = require("./like-where.input");
const class_transformer_1 = require("class-transformer");
const like_order_by_with_relation_input_1 = require("./like-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const like_where_unique_input_1 = require("./like-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const like_count_aggregate_input_1 = require("./like-count-aggregate.input");
const like_min_aggregate_input_1 = require("./like-min-aggregate.input");
const like_max_aggregate_input_1 = require("./like-max-aggregate.input");
let LikeAggregateArgs = class LikeAggregateArgs {
};
exports.LikeAggregateArgs = LikeAggregateArgs;
__decorate([
    (0, graphql_1.Field)(() => like_where_input_1.LikeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => like_where_input_1.LikeWhereInput),
    __metadata("design:type", like_where_input_1.LikeWhereInput)
], LikeAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [like_order_by_with_relation_input_1.LikeOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], LikeAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_where_unique_input_1.LikeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], LikeAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LikeAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LikeAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_count_aggregate_input_1.LikeCountAggregateInput, { nullable: true }),
    __metadata("design:type", like_count_aggregate_input_1.LikeCountAggregateInput)
], LikeAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_min_aggregate_input_1.LikeMinAggregateInput, { nullable: true }),
    __metadata("design:type", like_min_aggregate_input_1.LikeMinAggregateInput)
], LikeAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_max_aggregate_input_1.LikeMaxAggregateInput, { nullable: true }),
    __metadata("design:type", like_max_aggregate_input_1.LikeMaxAggregateInput)
], LikeAggregateArgs.prototype, "_max", void 0);
exports.LikeAggregateArgs = LikeAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LikeAggregateArgs);
//# sourceMappingURL=like-aggregate.args.js.map