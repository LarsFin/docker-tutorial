import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Game } from "../models/Game";
import { PlatformCount } from "../resolvers/outputs/PlatformCount";

@TypeGraphQL.ObjectType("Platform", {
  isAbstract: true
})
export class Platform {
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

  games?: Game[];

  @TypeGraphQL.Field(_type => PlatformCount, {
    nullable: true
  })
  _count?: PlatformCount | null;
}
