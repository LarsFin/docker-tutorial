import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateNestedManyWithoutGenresInput } from "../inputs/GameCreateNestedManyWithoutGenresInput";

@TypeGraphQL.InputType("GenreCreateInput", {
  isAbstract: true
})
export class GenreCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => GameCreateNestedManyWithoutGenresInput, {
    nullable: true
  })
  games?: GameCreateNestedManyWithoutGenresInput | undefined;
}
