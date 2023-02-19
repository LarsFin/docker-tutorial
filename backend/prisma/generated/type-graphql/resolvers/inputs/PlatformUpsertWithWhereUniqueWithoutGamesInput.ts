import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutGamesInput } from "../inputs/PlatformCreateWithoutGamesInput";
import { PlatformUpdateWithoutGamesInput } from "../inputs/PlatformUpdateWithoutGamesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformUpsertWithWhereUniqueWithoutGamesInput", {
  isAbstract: true
})
export class PlatformUpsertWithWhereUniqueWithoutGamesInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutGamesInput, {
    nullable: false
  })
  update!: PlatformUpdateWithoutGamesInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutGamesInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutGamesInput;
}
