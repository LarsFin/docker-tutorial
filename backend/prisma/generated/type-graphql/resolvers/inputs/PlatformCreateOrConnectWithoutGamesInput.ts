import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutGamesInput } from "../inputs/PlatformCreateWithoutGamesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformCreateOrConnectWithoutGamesInput", {
  isAbstract: true
})
export class PlatformCreateOrConnectWithoutGamesInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutGamesInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutGamesInput;
}
