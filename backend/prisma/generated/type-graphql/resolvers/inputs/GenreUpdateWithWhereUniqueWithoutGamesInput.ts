import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreUpdateWithoutGamesInput } from "../inputs/GenreUpdateWithoutGamesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpdateWithWhereUniqueWithoutGamesInput", {
  isAbstract: true
})
export class GenreUpdateWithWhereUniqueWithoutGamesInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreUpdateWithoutGamesInput, {
    nullable: false
  })
  data!: GenreUpdateWithoutGamesInput;
}
