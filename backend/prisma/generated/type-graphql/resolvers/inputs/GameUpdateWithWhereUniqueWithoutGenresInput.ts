import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameUpdateWithoutGenresInput } from "../inputs/GameUpdateWithoutGenresInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpdateWithWhereUniqueWithoutGenresInput", {
  isAbstract: true
})
export class GameUpdateWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameUpdateWithoutGenresInput, {
    nullable: false
  })
  data!: GameUpdateWithoutGenresInput;
}
