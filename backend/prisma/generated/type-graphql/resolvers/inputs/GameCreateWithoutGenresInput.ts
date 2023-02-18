import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherCreateNestedOneWithoutGamesInput } from "../inputs/PublisherCreateNestedOneWithoutGamesInput";

@TypeGraphQL.InputType("GameCreateWithoutGenresInput", {
  isAbstract: true
})
export class GameCreateWithoutGenresInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => PublisherCreateNestedOneWithoutGamesInput, {
    nullable: true
  })
  publisher?: PublisherCreateNestedOneWithoutGamesInput | undefined;
}
