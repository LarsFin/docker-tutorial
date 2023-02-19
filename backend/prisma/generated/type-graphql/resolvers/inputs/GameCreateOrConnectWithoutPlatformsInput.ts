import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateWithoutPlatformsInput } from "../inputs/GameCreateWithoutPlatformsInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameCreateOrConnectWithoutPlatformsInput", {
  isAbstract: true
})
export class GameCreateOrConnectWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameCreateWithoutPlatformsInput, {
    nullable: false
  })
  create!: GameCreateWithoutPlatformsInput;
}
