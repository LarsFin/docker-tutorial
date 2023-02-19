import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateNestedManyWithoutGamesInput } from "../inputs/GenreCreateNestedManyWithoutGamesInput";
import { PlatformCreateNestedManyWithoutGamesInput } from "../inputs/PlatformCreateNestedManyWithoutGamesInput";

@TypeGraphQL.InputType("GameCreateWithoutPublisherInput", {
  isAbstract: true
})
export class GameCreateWithoutPublisherInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coverUrl?: string | undefined;

  @TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutGamesInput, {
    nullable: true
  })
  genres?: GenreCreateNestedManyWithoutGamesInput | undefined;

  @TypeGraphQL.Field(_type => PlatformCreateNestedManyWithoutGamesInput, {
    nullable: true
  })
  platforms?: PlatformCreateNestedManyWithoutGamesInput | undefined;
}
