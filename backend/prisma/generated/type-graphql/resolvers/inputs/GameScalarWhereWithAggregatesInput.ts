import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GameScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GameScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GameScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GameScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GameScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GameScalarWhereWithAggregatesInput[] | undefined;

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
  coverUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  publisherId?: IntNullableWithAggregatesFilter | undefined;
}
