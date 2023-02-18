import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutGamesInput } from "../inputs/GenreCreateOrConnectWithoutGamesInput";
import { GenreCreateWithoutGamesInput } from "../inputs/GenreCreateWithoutGamesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreCreateNestedManyWithoutGamesInput", {
  isAbstract: true
})
export class GenreCreateNestedManyWithoutGamesInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutGamesInput], {
    nullable: true
  })
  create?: GenreCreateWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutGamesInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  connect?: GenreWhereUniqueInput[] | undefined;
}
