import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameAvgOrderByAggregateInput } from "../inputs/GameAvgOrderByAggregateInput";
import { GameCountOrderByAggregateInput } from "../inputs/GameCountOrderByAggregateInput";
import { GameMaxOrderByAggregateInput } from "../inputs/GameMaxOrderByAggregateInput";
import { GameMinOrderByAggregateInput } from "../inputs/GameMinOrderByAggregateInput";
import { GameSumOrderByAggregateInput } from "../inputs/GameSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GameOrderByWithAggregationInput", {
  isAbstract: true
})
export class GameOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imgSrc?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  publisherId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GameCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GameCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GameAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GameAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GameMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GameMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GameMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GameMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GameSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GameSumOrderByAggregateInput | undefined;
}
