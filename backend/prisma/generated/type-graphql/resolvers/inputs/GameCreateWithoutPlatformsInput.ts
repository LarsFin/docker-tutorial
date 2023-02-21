import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateNestedManyWithoutGamesInput } from "../inputs/GenreCreateNestedManyWithoutGamesInput";
import { PublisherCreateNestedOneWithoutGamesInput } from "../inputs/PublisherCreateNestedOneWithoutGamesInput";

@TypeGraphQL.InputType("GameCreateWithoutPlatformsInput", {
  isAbstract: true
})
export class GameCreateWithoutPlatformsInput {
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
}
