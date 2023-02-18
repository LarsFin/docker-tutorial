import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateWithoutGamesInput } from "../inputs/GenreCreateWithoutGamesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreCreateOrConnectWithoutGamesInput", {
  isAbstract: true
})
export class GenreCreateOrConnectWithoutGamesInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreCreateWithoutGamesInput, {
    nullable: false
  })
  create!: GenreCreateWithoutGamesInput;
}
