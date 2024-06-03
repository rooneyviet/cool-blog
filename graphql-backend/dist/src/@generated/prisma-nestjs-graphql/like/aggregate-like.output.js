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
exports.AggregateLike = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const like_count_aggregate_output_1 = require("./like-count-aggregate.output");
const like_min_aggregate_output_1 = require("./like-min-aggregate.output");
const like_max_aggregate_output_1 = require("./like-max-aggregate.output");
let AggregateLike = class AggregateLike {
};
exports.AggregateLike = AggregateLike;
__decorate([
    (0, graphql_1.Field)(() => like_count_aggregate_output_1.LikeCountAggregate, { nullable: true }),
    __metadata("design:type", like_count_aggregate_output_1.LikeCountAggregate)
], AggregateLike.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_min_aggregate_output_1.LikeMinAggregate, { nullable: true }),
    __metadata("design:type", like_min_aggregate_output_1.LikeMinAggregate)
], AggregateLike.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => like_max_aggregate_output_1.LikeMaxAggregate, { nullable: true }),
    __metadata("design:type", like_max_aggregate_output_1.LikeMaxAggregate)
], AggregateLike.prototype, "_max", void 0);
exports.AggregateLike = AggregateLike = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateLike);
//# sourceMappingURL=aggregate-like.output.js.map