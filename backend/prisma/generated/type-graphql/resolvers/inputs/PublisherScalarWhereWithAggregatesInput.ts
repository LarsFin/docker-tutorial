import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PublisherScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PublisherScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PublisherScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PublisherScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PublisherScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PublisherScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PublisherScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PublisherScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  imgSrc?: StringWithAggregatesFilter | undefined;
}
