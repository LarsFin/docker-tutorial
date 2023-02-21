import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameOrderByRelationAggregateInput } from "../inputs/GameOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PublisherOrderByWithRelationInput", {
  isAbstract: true
})
export class PublisherOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => GameOrderByRelationAggregateInput, {
    nullable: true
  })
  games?: GameOrderByRelationAggregateInput | undefined;
}
