import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Game } from "../models/Game";
import { PublisherCount } from "../resolvers/outputs/PublisherCount";

@TypeGraphQL.ObjectType("Publisher", {
  isAbstract: true
})
export class Publisher {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  games?: Game[];

  @TypeGraphQL.Field(_type => PublisherCount, {
    nullable: true
  })
  _count?: PublisherCount | null;
}
