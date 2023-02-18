import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateWithoutGenresInput } from "../inputs/GameCreateWithoutGenresInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameCreateOrConnectWithoutGenresInput", {
  isAbstract: true
})
export class GameCreateOrConnectWithoutGenresInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameCreateWithoutGenresInput, {
    nullable: false
  })
  create!: GameCreateWithoutGenresInput;
}
