import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
export declare class CategoryScalarWhereWithAggregatesInput {
    AND?: Array<CategoryScalarWhereWithAggregatesInput>;
    OR?: Array<CategoryScalarWhereWithAggregatesInput>;
    NOT?: Array<CategoryScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    description?: StringNullableWithAggregatesFilter;
}
