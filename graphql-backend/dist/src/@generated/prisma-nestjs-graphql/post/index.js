"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarWhereInput = exports.PostScalarWhereWithAggregatesInput = exports.PostScalarFieldEnum = exports.PostRelationFilter = exports.PostOrderByWithRelationInput = exports.PostOrderByWithAggregationInput = exports.PostOrderByRelationAggregateInput = exports.PostMinOrderByAggregateInput = exports.PostMinAggregate = exports.PostMinAggregateInput = exports.PostMaxOrderByAggregateInput = exports.PostMaxAggregate = exports.PostMaxAggregateInput = exports.PostListRelationFilter = exports.PostGroupBy = exports.PostGroupByArgs = exports.PostCreateInput = exports.PostCreateWithoutLikesInput = exports.PostCreateWithoutCommentsInput = exports.PostCreateWithoutCategoriesInput = exports.PostCreateWithoutAuthorInput = exports.PostCreateOrConnectWithoutLikesInput = exports.PostCreateOrConnectWithoutCommentsInput = exports.PostCreateOrConnectWithoutCategoriesInput = exports.PostCreateOrConnectWithoutAuthorInput = exports.PostCreateNestedOneWithoutLikesInput = exports.PostCreateNestedOneWithoutCommentsInput = exports.PostCreateNestedOneWithoutCategoriesInput = exports.PostCreateNestedManyWithoutAuthorInput = exports.PostCreateManyInput = exports.PostCreateManyAuthorInput = exports.PostCreateManyAuthorInputEnvelope = exports.PostCount = exports.PostCountOrderByAggregateInput = exports.PostCountAggregate = exports.PostCountAggregateInput = exports.PostAvgOrderByAggregateInput = exports.PostAvgAggregate = exports.PostAvgAggregateInput = exports.PostAggregateArgs = exports.FindUniquePostArgs = exports.FindUniquePostOrThrowArgs = exports.FindManyPostArgs = exports.FindFirstPostArgs = exports.FindFirstPostOrThrowArgs = exports.DeleteOnePostArgs = exports.DeleteManyPostArgs = exports.CreateOnePostArgs = exports.CreateManyPostArgs = exports.AggregatePost = void 0;
exports.UpsertOnePostArgs = exports.UpdateOnePostArgs = exports.UpdateManyPostArgs = exports.Post = exports.PostWhereInput = exports.PostWhereUniqueInput = exports.PostUpsertWithoutLikesInput = exports.PostUpsertWithoutCommentsInput = exports.PostUpsertWithoutCategoriesInput = exports.PostUpsertWithWhereUniqueWithoutAuthorInput = exports.PostUpdateInput = exports.PostUpdateWithoutLikesInput = exports.PostUpdateWithoutCommentsInput = exports.PostUpdateWithoutCategoriesInput = exports.PostUpdateWithoutAuthorInput = exports.PostUpdateWithWhereUniqueWithoutAuthorInput = exports.PostUpdateToOneWithWhereWithoutLikesInput = exports.PostUpdateToOneWithWhereWithoutCommentsInput = exports.PostUpdateToOneWithWhereWithoutCategoriesInput = exports.PostUpdateOneRequiredWithoutLikesNestedInput = exports.PostUpdateOneRequiredWithoutCommentsNestedInput = exports.PostUpdateOneRequiredWithoutCategoriesNestedInput = exports.PostUpdateManyWithoutAuthorNestedInput = exports.PostUpdateManyWithWhereWithoutAuthorInput = exports.PostUpdateManyMutationInput = exports.PostUncheckedUpdateInput = exports.PostUncheckedUpdateWithoutLikesInput = exports.PostUncheckedUpdateWithoutCommentsInput = exports.PostUncheckedUpdateWithoutCategoriesInput = exports.PostUncheckedUpdateWithoutAuthorInput = exports.PostUncheckedUpdateManyInput = exports.PostUncheckedUpdateManyWithoutAuthorInput = exports.PostUncheckedUpdateManyWithoutAuthorNestedInput = exports.PostUncheckedCreateInput = exports.PostUncheckedCreateWithoutLikesInput = exports.PostUncheckedCreateWithoutCommentsInput = exports.PostUncheckedCreateWithoutCategoriesInput = exports.PostUncheckedCreateWithoutAuthorInput = exports.PostUncheckedCreateNestedManyWithoutAuthorInput = exports.PostSumOrderByAggregateInput = exports.PostSumAggregate = exports.PostSumAggregateInput = void 0;
var aggregate_post_output_1 = require("./aggregate-post.output");
Object.defineProperty(exports, "AggregatePost", { enumerable: true, get: function () { return aggregate_post_output_1.AggregatePost; } });
var create_many_post_args_1 = require("./create-many-post.args");
Object.defineProperty(exports, "CreateManyPostArgs", { enumerable: true, get: function () { return create_many_post_args_1.CreateManyPostArgs; } });
var create_one_post_args_1 = require("./create-one-post.args");
Object.defineProperty(exports, "CreateOnePostArgs", { enumerable: true, get: function () { return create_one_post_args_1.CreateOnePostArgs; } });
var delete_many_post_args_1 = require("./delete-many-post.args");
Object.defineProperty(exports, "DeleteManyPostArgs", { enumerable: true, get: function () { return delete_many_post_args_1.DeleteManyPostArgs; } });
var delete_one_post_args_1 = require("./delete-one-post.args");
Object.defineProperty(exports, "DeleteOnePostArgs", { enumerable: true, get: function () { return delete_one_post_args_1.DeleteOnePostArgs; } });
var find_first_post_or_throw_args_1 = require("./find-first-post-or-throw.args");
Object.defineProperty(exports, "FindFirstPostOrThrowArgs", { enumerable: true, get: function () { return find_first_post_or_throw_args_1.FindFirstPostOrThrowArgs; } });
var find_first_post_args_1 = require("./find-first-post.args");
Object.defineProperty(exports, "FindFirstPostArgs", { enumerable: true, get: function () { return find_first_post_args_1.FindFirstPostArgs; } });
var find_many_post_args_1 = require("./find-many-post.args");
Object.defineProperty(exports, "FindManyPostArgs", { enumerable: true, get: function () { return find_many_post_args_1.FindManyPostArgs; } });
var find_unique_post_or_throw_args_1 = require("./find-unique-post-or-throw.args");
Object.defineProperty(exports, "FindUniquePostOrThrowArgs", { enumerable: true, get: function () { return find_unique_post_or_throw_args_1.FindUniquePostOrThrowArgs; } });
var find_unique_post_args_1 = require("./find-unique-post.args");
Object.defineProperty(exports, "FindUniquePostArgs", { enumerable: true, get: function () { return find_unique_post_args_1.FindUniquePostArgs; } });
var post_aggregate_args_1 = require("./post-aggregate.args");
Object.defineProperty(exports, "PostAggregateArgs", { enumerable: true, get: function () { return post_aggregate_args_1.PostAggregateArgs; } });
var post_avg_aggregate_input_1 = require("./post-avg-aggregate.input");
Object.defineProperty(exports, "PostAvgAggregateInput", { enumerable: true, get: function () { return post_avg_aggregate_input_1.PostAvgAggregateInput; } });
var post_avg_aggregate_output_1 = require("./post-avg-aggregate.output");
Object.defineProperty(exports, "PostAvgAggregate", { enumerable: true, get: function () { return post_avg_aggregate_output_1.PostAvgAggregate; } });
var post_avg_order_by_aggregate_input_1 = require("./post-avg-order-by-aggregate.input");
Object.defineProperty(exports, "PostAvgOrderByAggregateInput", { enumerable: true, get: function () { return post_avg_order_by_aggregate_input_1.PostAvgOrderByAggregateInput; } });
var post_count_aggregate_input_1 = require("./post-count-aggregate.input");
Object.defineProperty(exports, "PostCountAggregateInput", { enumerable: true, get: function () { return post_count_aggregate_input_1.PostCountAggregateInput; } });
var post_count_aggregate_output_1 = require("./post-count-aggregate.output");
Object.defineProperty(exports, "PostCountAggregate", { enumerable: true, get: function () { return post_count_aggregate_output_1.PostCountAggregate; } });
var post_count_order_by_aggregate_input_1 = require("./post-count-order-by-aggregate.input");
Object.defineProperty(exports, "PostCountOrderByAggregateInput", { enumerable: true, get: function () { return post_count_order_by_aggregate_input_1.PostCountOrderByAggregateInput; } });
var post_count_output_1 = require("./post-count.output");
Object.defineProperty(exports, "PostCount", { enumerable: true, get: function () { return post_count_output_1.PostCount; } });
var post_create_many_author_input_envelope_input_1 = require("./post-create-many-author-input-envelope.input");
Object.defineProperty(exports, "PostCreateManyAuthorInputEnvelope", { enumerable: true, get: function () { return post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope; } });
var post_create_many_author_input_1 = require("./post-create-many-author.input");
Object.defineProperty(exports, "PostCreateManyAuthorInput", { enumerable: true, get: function () { return post_create_many_author_input_1.PostCreateManyAuthorInput; } });
var post_create_many_input_1 = require("./post-create-many.input");
Object.defineProperty(exports, "PostCreateManyInput", { enumerable: true, get: function () { return post_create_many_input_1.PostCreateManyInput; } });
var post_create_nested_many_without_author_input_1 = require("./post-create-nested-many-without-author.input");
Object.defineProperty(exports, "PostCreateNestedManyWithoutAuthorInput", { enumerable: true, get: function () { return post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput; } });
var post_create_nested_one_without_categories_input_1 = require("./post-create-nested-one-without-categories.input");
Object.defineProperty(exports, "PostCreateNestedOneWithoutCategoriesInput", { enumerable: true, get: function () { return post_create_nested_one_without_categories_input_1.PostCreateNestedOneWithoutCategoriesInput; } });
var post_create_nested_one_without_comments_input_1 = require("./post-create-nested-one-without-comments.input");
Object.defineProperty(exports, "PostCreateNestedOneWithoutCommentsInput", { enumerable: true, get: function () { return post_create_nested_one_without_comments_input_1.PostCreateNestedOneWithoutCommentsInput; } });
var post_create_nested_one_without_likes_input_1 = require("./post-create-nested-one-without-likes.input");
Object.defineProperty(exports, "PostCreateNestedOneWithoutLikesInput", { enumerable: true, get: function () { return post_create_nested_one_without_likes_input_1.PostCreateNestedOneWithoutLikesInput; } });
var post_create_or_connect_without_author_input_1 = require("./post-create-or-connect-without-author.input");
Object.defineProperty(exports, "PostCreateOrConnectWithoutAuthorInput", { enumerable: true, get: function () { return post_create_or_connect_without_author_input_1.PostCreateOrConnectWithoutAuthorInput; } });
var post_create_or_connect_without_categories_input_1 = require("./post-create-or-connect-without-categories.input");
Object.defineProperty(exports, "PostCreateOrConnectWithoutCategoriesInput", { enumerable: true, get: function () { return post_create_or_connect_without_categories_input_1.PostCreateOrConnectWithoutCategoriesInput; } });
var post_create_or_connect_without_comments_input_1 = require("./post-create-or-connect-without-comments.input");
Object.defineProperty(exports, "PostCreateOrConnectWithoutCommentsInput", { enumerable: true, get: function () { return post_create_or_connect_without_comments_input_1.PostCreateOrConnectWithoutCommentsInput; } });
var post_create_or_connect_without_likes_input_1 = require("./post-create-or-connect-without-likes.input");
Object.defineProperty(exports, "PostCreateOrConnectWithoutLikesInput", { enumerable: true, get: function () { return post_create_or_connect_without_likes_input_1.PostCreateOrConnectWithoutLikesInput; } });
var post_create_without_author_input_1 = require("./post-create-without-author.input");
Object.defineProperty(exports, "PostCreateWithoutAuthorInput", { enumerable: true, get: function () { return post_create_without_author_input_1.PostCreateWithoutAuthorInput; } });
var post_create_without_categories_input_1 = require("./post-create-without-categories.input");
Object.defineProperty(exports, "PostCreateWithoutCategoriesInput", { enumerable: true, get: function () { return post_create_without_categories_input_1.PostCreateWithoutCategoriesInput; } });
var post_create_without_comments_input_1 = require("./post-create-without-comments.input");
Object.defineProperty(exports, "PostCreateWithoutCommentsInput", { enumerable: true, get: function () { return post_create_without_comments_input_1.PostCreateWithoutCommentsInput; } });
var post_create_without_likes_input_1 = require("./post-create-without-likes.input");
Object.defineProperty(exports, "PostCreateWithoutLikesInput", { enumerable: true, get: function () { return post_create_without_likes_input_1.PostCreateWithoutLikesInput; } });
var post_create_input_1 = require("./post-create.input");
Object.defineProperty(exports, "PostCreateInput", { enumerable: true, get: function () { return post_create_input_1.PostCreateInput; } });
var post_group_by_args_1 = require("./post-group-by.args");
Object.defineProperty(exports, "PostGroupByArgs", { enumerable: true, get: function () { return post_group_by_args_1.PostGroupByArgs; } });
var post_group_by_output_1 = require("./post-group-by.output");
Object.defineProperty(exports, "PostGroupBy", { enumerable: true, get: function () { return post_group_by_output_1.PostGroupBy; } });
var post_list_relation_filter_input_1 = require("./post-list-relation-filter.input");
Object.defineProperty(exports, "PostListRelationFilter", { enumerable: true, get: function () { return post_list_relation_filter_input_1.PostListRelationFilter; } });
var post_max_aggregate_input_1 = require("./post-max-aggregate.input");
Object.defineProperty(exports, "PostMaxAggregateInput", { enumerable: true, get: function () { return post_max_aggregate_input_1.PostMaxAggregateInput; } });
var post_max_aggregate_output_1 = require("./post-max-aggregate.output");
Object.defineProperty(exports, "PostMaxAggregate", { enumerable: true, get: function () { return post_max_aggregate_output_1.PostMaxAggregate; } });
var post_max_order_by_aggregate_input_1 = require("./post-max-order-by-aggregate.input");
Object.defineProperty(exports, "PostMaxOrderByAggregateInput", { enumerable: true, get: function () { return post_max_order_by_aggregate_input_1.PostMaxOrderByAggregateInput; } });
var post_min_aggregate_input_1 = require("./post-min-aggregate.input");
Object.defineProperty(exports, "PostMinAggregateInput", { enumerable: true, get: function () { return post_min_aggregate_input_1.PostMinAggregateInput; } });
var post_min_aggregate_output_1 = require("./post-min-aggregate.output");
Object.defineProperty(exports, "PostMinAggregate", { enumerable: true, get: function () { return post_min_aggregate_output_1.PostMinAggregate; } });
var post_min_order_by_aggregate_input_1 = require("./post-min-order-by-aggregate.input");
Object.defineProperty(exports, "PostMinOrderByAggregateInput", { enumerable: true, get: function () { return post_min_order_by_aggregate_input_1.PostMinOrderByAggregateInput; } });
var post_order_by_relation_aggregate_input_1 = require("./post-order-by-relation-aggregate.input");
Object.defineProperty(exports, "PostOrderByRelationAggregateInput", { enumerable: true, get: function () { return post_order_by_relation_aggregate_input_1.PostOrderByRelationAggregateInput; } });
var post_order_by_with_aggregation_input_1 = require("./post-order-by-with-aggregation.input");
Object.defineProperty(exports, "PostOrderByWithAggregationInput", { enumerable: true, get: function () { return post_order_by_with_aggregation_input_1.PostOrderByWithAggregationInput; } });
var post_order_by_with_relation_input_1 = require("./post-order-by-with-relation.input");
Object.defineProperty(exports, "PostOrderByWithRelationInput", { enumerable: true, get: function () { return post_order_by_with_relation_input_1.PostOrderByWithRelationInput; } });
var post_relation_filter_input_1 = require("./post-relation-filter.input");
Object.defineProperty(exports, "PostRelationFilter", { enumerable: true, get: function () { return post_relation_filter_input_1.PostRelationFilter; } });
var post_scalar_field_enum_1 = require("./post-scalar-field.enum");
Object.defineProperty(exports, "PostScalarFieldEnum", { enumerable: true, get: function () { return post_scalar_field_enum_1.PostScalarFieldEnum; } });
var post_scalar_where_with_aggregates_input_1 = require("./post-scalar-where-with-aggregates.input");
Object.defineProperty(exports, "PostScalarWhereWithAggregatesInput", { enumerable: true, get: function () { return post_scalar_where_with_aggregates_input_1.PostScalarWhereWithAggregatesInput; } });
var post_scalar_where_input_1 = require("./post-scalar-where.input");
Object.defineProperty(exports, "PostScalarWhereInput", { enumerable: true, get: function () { return post_scalar_where_input_1.PostScalarWhereInput; } });
var post_sum_aggregate_input_1 = require("./post-sum-aggregate.input");
Object.defineProperty(exports, "PostSumAggregateInput", { enumerable: true, get: function () { return post_sum_aggregate_input_1.PostSumAggregateInput; } });
var post_sum_aggregate_output_1 = require("./post-sum-aggregate.output");
Object.defineProperty(exports, "PostSumAggregate", { enumerable: true, get: function () { return post_sum_aggregate_output_1.PostSumAggregate; } });
var post_sum_order_by_aggregate_input_1 = require("./post-sum-order-by-aggregate.input");
Object.defineProperty(exports, "PostSumOrderByAggregateInput", { enumerable: true, get: function () { return post_sum_order_by_aggregate_input_1.PostSumOrderByAggregateInput; } });
var post_unchecked_create_nested_many_without_author_input_1 = require("./post-unchecked-create-nested-many-without-author.input");
Object.defineProperty(exports, "PostUncheckedCreateNestedManyWithoutAuthorInput", { enumerable: true, get: function () { return post_unchecked_create_nested_many_without_author_input_1.PostUncheckedCreateNestedManyWithoutAuthorInput; } });
var post_unchecked_create_without_author_input_1 = require("./post-unchecked-create-without-author.input");
Object.defineProperty(exports, "PostUncheckedCreateWithoutAuthorInput", { enumerable: true, get: function () { return post_unchecked_create_without_author_input_1.PostUncheckedCreateWithoutAuthorInput; } });
var post_unchecked_create_without_categories_input_1 = require("./post-unchecked-create-without-categories.input");
Object.defineProperty(exports, "PostUncheckedCreateWithoutCategoriesInput", { enumerable: true, get: function () { return post_unchecked_create_without_categories_input_1.PostUncheckedCreateWithoutCategoriesInput; } });
var post_unchecked_create_without_comments_input_1 = require("./post-unchecked-create-without-comments.input");
Object.defineProperty(exports, "PostUncheckedCreateWithoutCommentsInput", { enumerable: true, get: function () { return post_unchecked_create_without_comments_input_1.PostUncheckedCreateWithoutCommentsInput; } });
var post_unchecked_create_without_likes_input_1 = require("./post-unchecked-create-without-likes.input");
Object.defineProperty(exports, "PostUncheckedCreateWithoutLikesInput", { enumerable: true, get: function () { return post_unchecked_create_without_likes_input_1.PostUncheckedCreateWithoutLikesInput; } });
var post_unchecked_create_input_1 = require("./post-unchecked-create.input");
Object.defineProperty(exports, "PostUncheckedCreateInput", { enumerable: true, get: function () { return post_unchecked_create_input_1.PostUncheckedCreateInput; } });
var post_unchecked_update_many_without_author_nested_input_1 = require("./post-unchecked-update-many-without-author-nested.input");
Object.defineProperty(exports, "PostUncheckedUpdateManyWithoutAuthorNestedInput", { enumerable: true, get: function () { return post_unchecked_update_many_without_author_nested_input_1.PostUncheckedUpdateManyWithoutAuthorNestedInput; } });
var post_unchecked_update_many_without_author_input_1 = require("./post-unchecked-update-many-without-author.input");
Object.defineProperty(exports, "PostUncheckedUpdateManyWithoutAuthorInput", { enumerable: true, get: function () { return post_unchecked_update_many_without_author_input_1.PostUncheckedUpdateManyWithoutAuthorInput; } });
var post_unchecked_update_many_input_1 = require("./post-unchecked-update-many.input");
Object.defineProperty(exports, "PostUncheckedUpdateManyInput", { enumerable: true, get: function () { return post_unchecked_update_many_input_1.PostUncheckedUpdateManyInput; } });
var post_unchecked_update_without_author_input_1 = require("./post-unchecked-update-without-author.input");
Object.defineProperty(exports, "PostUncheckedUpdateWithoutAuthorInput", { enumerable: true, get: function () { return post_unchecked_update_without_author_input_1.PostUncheckedUpdateWithoutAuthorInput; } });
var post_unchecked_update_without_categories_input_1 = require("./post-unchecked-update-without-categories.input");
Object.defineProperty(exports, "PostUncheckedUpdateWithoutCategoriesInput", { enumerable: true, get: function () { return post_unchecked_update_without_categories_input_1.PostUncheckedUpdateWithoutCategoriesInput; } });
var post_unchecked_update_without_comments_input_1 = require("./post-unchecked-update-without-comments.input");
Object.defineProperty(exports, "PostUncheckedUpdateWithoutCommentsInput", { enumerable: true, get: function () { return post_unchecked_update_without_comments_input_1.PostUncheckedUpdateWithoutCommentsInput; } });
var post_unchecked_update_without_likes_input_1 = require("./post-unchecked-update-without-likes.input");
Object.defineProperty(exports, "PostUncheckedUpdateWithoutLikesInput", { enumerable: true, get: function () { return post_unchecked_update_without_likes_input_1.PostUncheckedUpdateWithoutLikesInput; } });
var post_unchecked_update_input_1 = require("./post-unchecked-update.input");
Object.defineProperty(exports, "PostUncheckedUpdateInput", { enumerable: true, get: function () { return post_unchecked_update_input_1.PostUncheckedUpdateInput; } });
var post_update_many_mutation_input_1 = require("./post-update-many-mutation.input");
Object.defineProperty(exports, "PostUpdateManyMutationInput", { enumerable: true, get: function () { return post_update_many_mutation_input_1.PostUpdateManyMutationInput; } });
var post_update_many_with_where_without_author_input_1 = require("./post-update-many-with-where-without-author.input");
Object.defineProperty(exports, "PostUpdateManyWithWhereWithoutAuthorInput", { enumerable: true, get: function () { return post_update_many_with_where_without_author_input_1.PostUpdateManyWithWhereWithoutAuthorInput; } });
var post_update_many_without_author_nested_input_1 = require("./post-update-many-without-author-nested.input");
Object.defineProperty(exports, "PostUpdateManyWithoutAuthorNestedInput", { enumerable: true, get: function () { return post_update_many_without_author_nested_input_1.PostUpdateManyWithoutAuthorNestedInput; } });
var post_update_one_required_without_categories_nested_input_1 = require("./post-update-one-required-without-categories-nested.input");
Object.defineProperty(exports, "PostUpdateOneRequiredWithoutCategoriesNestedInput", { enumerable: true, get: function () { return post_update_one_required_without_categories_nested_input_1.PostUpdateOneRequiredWithoutCategoriesNestedInput; } });
var post_update_one_required_without_comments_nested_input_1 = require("./post-update-one-required-without-comments-nested.input");
Object.defineProperty(exports, "PostUpdateOneRequiredWithoutCommentsNestedInput", { enumerable: true, get: function () { return post_update_one_required_without_comments_nested_input_1.PostUpdateOneRequiredWithoutCommentsNestedInput; } });
var post_update_one_required_without_likes_nested_input_1 = require("./post-update-one-required-without-likes-nested.input");
Object.defineProperty(exports, "PostUpdateOneRequiredWithoutLikesNestedInput", { enumerable: true, get: function () { return post_update_one_required_without_likes_nested_input_1.PostUpdateOneRequiredWithoutLikesNestedInput; } });
var post_update_to_one_with_where_without_categories_input_1 = require("./post-update-to-one-with-where-without-categories.input");
Object.defineProperty(exports, "PostUpdateToOneWithWhereWithoutCategoriesInput", { enumerable: true, get: function () { return post_update_to_one_with_where_without_categories_input_1.PostUpdateToOneWithWhereWithoutCategoriesInput; } });
var post_update_to_one_with_where_without_comments_input_1 = require("./post-update-to-one-with-where-without-comments.input");
Object.defineProperty(exports, "PostUpdateToOneWithWhereWithoutCommentsInput", { enumerable: true, get: function () { return post_update_to_one_with_where_without_comments_input_1.PostUpdateToOneWithWhereWithoutCommentsInput; } });
var post_update_to_one_with_where_without_likes_input_1 = require("./post-update-to-one-with-where-without-likes.input");
Object.defineProperty(exports, "PostUpdateToOneWithWhereWithoutLikesInput", { enumerable: true, get: function () { return post_update_to_one_with_where_without_likes_input_1.PostUpdateToOneWithWhereWithoutLikesInput; } });
var post_update_with_where_unique_without_author_input_1 = require("./post-update-with-where-unique-without-author.input");
Object.defineProperty(exports, "PostUpdateWithWhereUniqueWithoutAuthorInput", { enumerable: true, get: function () { return post_update_with_where_unique_without_author_input_1.PostUpdateWithWhereUniqueWithoutAuthorInput; } });
var post_update_without_author_input_1 = require("./post-update-without-author.input");
Object.defineProperty(exports, "PostUpdateWithoutAuthorInput", { enumerable: true, get: function () { return post_update_without_author_input_1.PostUpdateWithoutAuthorInput; } });
var post_update_without_categories_input_1 = require("./post-update-without-categories.input");
Object.defineProperty(exports, "PostUpdateWithoutCategoriesInput", { enumerable: true, get: function () { return post_update_without_categories_input_1.PostUpdateWithoutCategoriesInput; } });
var post_update_without_comments_input_1 = require("./post-update-without-comments.input");
Object.defineProperty(exports, "PostUpdateWithoutCommentsInput", { enumerable: true, get: function () { return post_update_without_comments_input_1.PostUpdateWithoutCommentsInput; } });
var post_update_without_likes_input_1 = require("./post-update-without-likes.input");
Object.defineProperty(exports, "PostUpdateWithoutLikesInput", { enumerable: true, get: function () { return post_update_without_likes_input_1.PostUpdateWithoutLikesInput; } });
var post_update_input_1 = require("./post-update.input");
Object.defineProperty(exports, "PostUpdateInput", { enumerable: true, get: function () { return post_update_input_1.PostUpdateInput; } });
var post_upsert_with_where_unique_without_author_input_1 = require("./post-upsert-with-where-unique-without-author.input");
Object.defineProperty(exports, "PostUpsertWithWhereUniqueWithoutAuthorInput", { enumerable: true, get: function () { return post_upsert_with_where_unique_without_author_input_1.PostUpsertWithWhereUniqueWithoutAuthorInput; } });
var post_upsert_without_categories_input_1 = require("./post-upsert-without-categories.input");
Object.defineProperty(exports, "PostUpsertWithoutCategoriesInput", { enumerable: true, get: function () { return post_upsert_without_categories_input_1.PostUpsertWithoutCategoriesInput; } });
var post_upsert_without_comments_input_1 = require("./post-upsert-without-comments.input");
Object.defineProperty(exports, "PostUpsertWithoutCommentsInput", { enumerable: true, get: function () { return post_upsert_without_comments_input_1.PostUpsertWithoutCommentsInput; } });
var post_upsert_without_likes_input_1 = require("./post-upsert-without-likes.input");
Object.defineProperty(exports, "PostUpsertWithoutLikesInput", { enumerable: true, get: function () { return post_upsert_without_likes_input_1.PostUpsertWithoutLikesInput; } });
var post_where_unique_input_1 = require("./post-where-unique.input");
Object.defineProperty(exports, "PostWhereUniqueInput", { enumerable: true, get: function () { return post_where_unique_input_1.PostWhereUniqueInput; } });
var post_where_input_1 = require("./post-where.input");
Object.defineProperty(exports, "PostWhereInput", { enumerable: true, get: function () { return post_where_input_1.PostWhereInput; } });
var post_model_1 = require("./post.model");
Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return post_model_1.Post; } });
var update_many_post_args_1 = require("./update-many-post.args");
Object.defineProperty(exports, "UpdateManyPostArgs", { enumerable: true, get: function () { return update_many_post_args_1.UpdateManyPostArgs; } });
var update_one_post_args_1 = require("./update-one-post.args");
Object.defineProperty(exports, "UpdateOnePostArgs", { enumerable: true, get: function () { return update_one_post_args_1.UpdateOnePostArgs; } });
var upsert_one_post_args_1 = require("./upsert-one-post.args");
Object.defineProperty(exports, "UpsertOnePostArgs", { enumerable: true, get: function () { return upsert_one_post_args_1.UpsertOnePostArgs; } });
//# sourceMappingURL=index.js.map