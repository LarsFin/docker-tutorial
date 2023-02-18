import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateWithoutGamesInput } from "../inputs/GenreCreateWithoutGamesInput";
import { GenreUpdateWithoutGamesInput } from "../inputs/GenreUpdateWithoutGamesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpsertWithWhereUniqueWithoutGamesInput", {
  isAbstract: true
})
export class GenreUpsertWithWhereUniqueWithoutGamesInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreUpdateWithoutGamesInput, {
    nullable: false
  })
  update!: GenreUpdateWithoutGamesInput;

  @TypeGraphQL.Field(_type => GenreCreateWithoutGamesInput, {
    nullable: false
  })
  create!: GenreCreateWithoutGamesInput;
}
