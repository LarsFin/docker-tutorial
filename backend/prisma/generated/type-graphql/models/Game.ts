import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Genre } from "../models/Genre";
import { Platform } from "../models/Platform";
import { Publisher } from "../models/Publisher";
import { GameCount } from "../resolvers/outputs/GameCount";

@TypeGraphQL.ObjectType("Game", {
  isAbstract: true
})
export class Game {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  publisher?: Publisher | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  publisherId?: number | null;

  genres?: Genre[];

  platforms?: Platform[];

  @TypeGraphQL.Field(_type => GameCount, {
    nullable: true
  })
  _count?: GameCount | null;
}
