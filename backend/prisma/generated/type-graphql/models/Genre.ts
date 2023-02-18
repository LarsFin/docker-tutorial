import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Game } from "../models/Game";
import { GenreCount } from "../resolvers/outputs/GenreCount";

@TypeGraphQL.ObjectType("Genre", {
  isAbstract: true
})
export class Genre {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  games?: Game[];

  @TypeGraphQL.Field(_type => GenreCount, {
    nullable: true
  })
  _count?: GenreCount | null;
}
