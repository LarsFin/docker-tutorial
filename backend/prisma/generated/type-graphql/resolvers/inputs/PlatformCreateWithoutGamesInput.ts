import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PlatformCreateWithoutGamesInput", {
  isAbstract: true
})
export class PlatformCreateWithoutGamesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;
}
