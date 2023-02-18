import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameUpdateWithoutPublisherInput } from "../inputs/GameUpdateWithoutPublisherInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpdateWithWhereUniqueWithoutPublisherInput", {
  isAbstract: true
})
export class GameUpdateWithWhereUniqueWithoutPublisherInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameUpdateWithoutPublisherInput, {
    nullable: false
  })
  data!: GameUpdateWithoutPublisherInput;
}
