import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateNestedManyWithoutGamesInput } from "../inputs/GenreCreateNestedManyWithoutGamesInput";
import { PlatformCreateNestedManyWithoutGamesInput } from "../inputs/PlatformCreateNestedManyWithoutGamesInput";
import { PublisherCreateNestedOneWithoutGamesInput } from "../inputs/PublisherCreateNestedOneWithoutGamesInput";

@TypeGraphQL.InputType("GameCreateInput", {
  isAbstract: true
})
export class GameCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imgSrc?: string | undefined;

  @TypeGraphQL.Field(_type => PublisherCreateNestedOneWithoutGamesInput, {
    nullable: true
  })
  publisher?: PublisherCreateNestedOneWithoutGamesInput | undefined;

  @TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutGamesInput, {
    nullable: true
  })
  genres?: GenreCreateNestedManyWithoutGamesInput | undefined;

  @TypeGraphQL.Field(_type => PlatformCreateNestedManyWithoutGamesInput, {
    nullable: true
  })
  platforms?: PlatformCreateNestedManyWithoutGamesInput | undefined;
}
