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
exports.CategoryGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_count_aggregate_output_1 = require("./category-count-aggregate.output");
const category_min_aggregate_output_1 = require("./category-min-aggregate.output");
const category_max_aggregate_output_1 = require("./category-max-aggregate.output");
let CategoryGroupBy = class CategoryGroupBy {
};
exports.CategoryGroupBy = CategoryGroupBy;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CategoryGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CategoryGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CategoryGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_count_aggregate_output_1.CategoryCountAggregate, { nullable: true }),
    __metadata("design:type", category_count_aggregate_output_1.CategoryCountAggregate)
], CategoryGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_min_aggregate_output_1.CategoryMinAggregate, { nullable: true }),
    __metadata("design:type", category_min_aggregate_output_1.CategoryMinAggregate)
], CategoryGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_max_aggregate_output_1.CategoryMaxAggregate, { nullable: true }),
    __metadata("design:type", category_max_aggregate_output_1.CategoryMaxAggregate)
], CategoryGroupBy.prototype, "_max", void 0);
exports.CategoryGroupBy = CategoryGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CategoryGroupBy);
//# sourceMappingURL=category-group-by.output.js.map