import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateWithoutPlatformsInput } from "../inputs/GameCreateWithoutPlatformsInput";
import { GameUpdateWithoutPlatformsInput } from "../inputs/GameUpdateWithoutPlatformsInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpsertWithWhereUniqueWithoutPlatformsInput", {
  isAbstract: true
})
export class GameUpsertWithWhereUniqueWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameUpdateWithoutPlatformsInput, {
    nullable: false
  })
  update!: GameUpdateWithoutPlatformsInput;

  @TypeGraphQL.Field(_type => GameCreateWithoutPlatformsInput, {
    nullable: false
  })
  create!: GameCreateWithoutPlatformsInput;
}
