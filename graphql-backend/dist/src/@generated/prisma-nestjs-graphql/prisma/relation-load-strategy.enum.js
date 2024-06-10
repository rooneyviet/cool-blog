"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationLoadStrategy = void 0;
const graphql_1 = require("@nestjs/graphql");
var RelationLoadStrategy;
(function (RelationLoadStrategy) {
    RelationLoadStrategy["query"] = "query";
    RelationLoadStrategy["join"] = "join";
})(RelationLoadStrategy || (exports.RelationLoadStrategy = RelationLoadStrategy = {}));
(0, graphql_1.registerEnumType)(RelationLoadStrategy, { name: 'RelationLoadStrategy', description: undefined });
//# sourceMappingURL=relation-load-strategy.enum.js.map