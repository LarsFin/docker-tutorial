import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameUpdateWithoutPlatformsInput } from "../inputs/GameUpdateWithoutPlatformsInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpdateWithWhereUniqueWithoutPlatformsInput", {
  isAbstract: true
})
export class GameUpdateWithWhereUniqueWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameUpdateWithoutPlatformsInput, {
    nullable: false
  })
  data!: GameUpdateWithoutPlatformsInput;
}
