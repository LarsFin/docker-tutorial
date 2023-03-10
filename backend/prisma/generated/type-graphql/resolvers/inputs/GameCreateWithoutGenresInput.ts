import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateNestedManyWithoutGamesInput } from "../inputs/PlatformCreateNestedManyWithoutGamesInput";
import { PublisherCreateNestedOneWithoutGamesInput } from "../inputs/PublisherCreateNestedOneWithoutGamesInput";

@TypeGraphQL.InputType("GameCreateWithoutGenresInput", {
  isAbstract: true
})
export class GameCreateWithoutGenresInput {
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

  @TypeGraphQL.Field(_type => PlatformCreateNestedManyWithoutGamesInput, {
    nullable: true
  })
  platforms?: PlatformCreateNestedManyWithoutGamesInput | undefined;
}
