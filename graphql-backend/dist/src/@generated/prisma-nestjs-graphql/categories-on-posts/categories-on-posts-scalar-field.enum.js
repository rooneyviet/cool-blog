"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesOnPostsScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CategoriesOnPostsScalarFieldEnum;
(function (CategoriesOnPostsScalarFieldEnum) {
    CategoriesOnPostsScalarFieldEnum["postId"] = "postId";
    CategoriesOnPostsScalarFieldEnum["categoryId"] = "categoryId";
    CategoriesOnPostsScalarFieldEnum["assignedAt"] = "assignedAt";
    CategoriesOnPostsScalarFieldEnum["assignedBy"] = "assignedBy";
})(CategoriesOnPostsScalarFieldEnum || (exports.CategoriesOnPostsScalarFieldEnum = CategoriesOnPostsScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CategoriesOnPostsScalarFieldEnum, { name: 'CategoriesOnPostsScalarFieldEnum', description: undefined });
//# sourceMappingURL=categories-on-posts-scalar-field.enum.js.map