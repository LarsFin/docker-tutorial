import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateWithoutPublisherInput } from "../inputs/GameCreateWithoutPublisherInput";
import { GameUpdateWithoutPublisherInput } from "../inputs/GameUpdateWithoutPublisherInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpsertWithWhereUniqueWithoutPublisherInput", {
  isAbstract: true
})
export class GameUpsertWithWhereUniqueWithoutPublisherInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameUpdateWithoutPublisherInput, {
    nullable: false
  })
  update!: GameUpdateWithoutPublisherInput;

  @TypeGraphQL.Field(_type => GameCreateWithoutPublisherInput, {
    nullable: false
  })
  create!: GameCreateWithoutPublisherInput;
}
