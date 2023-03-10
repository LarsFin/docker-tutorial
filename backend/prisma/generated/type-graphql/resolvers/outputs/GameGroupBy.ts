import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameAvgAggregate } from "../outputs/GameAvgAggregate";
import { GameCountAggregate } from "../outputs/GameCountAggregate";
import { GameMaxAggregate } from "../outputs/GameMaxAggregate";
import { GameMinAggregate } from "../outputs/GameMinAggregate";
import { GameSumAggregate } from "../outputs/GameSumAggregate";

@TypeGraphQL.ObjectType("GameGroupBy", {
  isAbstract: true
})
export class GameGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imgSrc!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  publisherId!: number | null;

  @TypeGraphQL.Field(_type => GameCountAggregate, {
    nullable: true
  })
  _count!: GameCountAggregate | null;

  @TypeGraphQL.Field(_type => GameAvgAggregate, {
    nullable: true
  })
  _avg!: GameAvgAggregate | null;

  @TypeGraphQL.Field(_type => GameSumAggregate, {
    nullable: true
  })
  _sum!: GameSumAggregate | null;

  @TypeGraphQL.Field(_type => GameMinAggregate, {
    nullable: true
  })
  _min!: GameMinAggregate | null;

  @TypeGraphQL.Field(_type => GameMaxAggregate, {
    nullable: true
  })
  _max!: GameMaxAggregate | null;
}
