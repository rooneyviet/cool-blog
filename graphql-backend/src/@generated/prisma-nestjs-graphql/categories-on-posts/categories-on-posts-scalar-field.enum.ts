import { registerEnumType } from '@nestjs/graphql';

export enum CategoriesOnPostsScalarFieldEnum {
    postId = "postId",
    categoryId = "categoryId",
    assignedAt = "assignedAt",
    assignedBy = "assignedBy"
}


registerEnumType(CategoriesOnPostsScalarFieldEnum, { name: 'CategoriesOnPostsScalarFieldEnum', description: undefined })
