import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateWithoutPublisherInput } from "../inputs/GameCreateWithoutPublisherInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameCreateOrConnectWithoutPublisherInput", {
  isAbstract: true
})
export class GameCreateOrConnectWithoutPublisherInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameCreateWithoutPublisherInput, {
    nullable: false
  })
  create!: GameCreateWithoutPublisherInput;
}
