import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateWithoutGenresInput } from "../inputs/GameCreateWithoutGenresInput";
import { GameUpdateWithoutGenresInput } from "../inputs/GameUpdateWithoutGenresInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpsertWithWhereUniqueWithoutGenresInput", {
  isAbstract: true
})
export class GameUpsertWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameUpdateWithoutGenresInput, {
    nullable: false
  })
  update!: GameUpdateWithoutGenresInput;

  @TypeGraphQL.Field(_type => GameCreateWithoutGenresInput, {
    nullable: false
  })
  create!: GameCreateWithoutGenresInput;
}
