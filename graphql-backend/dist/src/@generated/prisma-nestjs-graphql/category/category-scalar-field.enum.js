"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CategoryScalarFieldEnum;
(function (CategoryScalarFieldEnum) {
    CategoryScalarFieldEnum["id"] = "id";
    CategoryScalarFieldEnum["name"] = "name";
    CategoryScalarFieldEnum["description"] = "description";
})(CategoryScalarFieldEnum || (exports.CategoryScalarFieldEnum = CategoryScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined });
//# sourceMappingURL=category-scalar-field.enum.js.map