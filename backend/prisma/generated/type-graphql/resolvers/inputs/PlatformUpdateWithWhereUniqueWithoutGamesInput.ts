import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformUpdateWithoutGamesInput } from "../inputs/PlatformUpdateWithoutGamesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformUpdateWithWhereUniqueWithoutGamesInput", {
  isAbstract: true
})
export class PlatformUpdateWithWhereUniqueWithoutGamesInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutGamesInput, {
    nullable: false
  })
  data!: PlatformUpdateWithoutGamesInput;
}
