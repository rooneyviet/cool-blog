"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var LikeScalarFieldEnum;
(function (LikeScalarFieldEnum) {
    LikeScalarFieldEnum["id"] = "id";
    LikeScalarFieldEnum["userId"] = "userId";
    LikeScalarFieldEnum["postId"] = "postId";
    LikeScalarFieldEnum["createdAt"] = "createdAt";
    LikeScalarFieldEnum["updatedAt"] = "updatedAt";
})(LikeScalarFieldEnum || (exports.LikeScalarFieldEnum = LikeScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(LikeScalarFieldEnum, { name: 'LikeScalarFieldEnum', description: undefined });
//# sourceMappingURL=like-scalar-field.enum.js.map