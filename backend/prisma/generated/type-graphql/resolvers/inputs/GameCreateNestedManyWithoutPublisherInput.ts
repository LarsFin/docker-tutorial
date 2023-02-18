import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateManyPublisherInputEnvelope } from "../inputs/GameCreateManyPublisherInputEnvelope";
import { GameCreateOrConnectWithoutPublisherInput } from "../inputs/GameCreateOrConnectWithoutPublisherInput";
import { GameCreateWithoutPublisherInput } from "../inputs/GameCreateWithoutPublisherInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameCreateNestedManyWithoutPublisherInput", {
  isAbstract: true
})
export class GameCreateNestedManyWithoutPublisherInput {
  @TypeGraphQL.Field(_type => [GameCreateWithoutPublisherInput], {
    nullable: true
  })
  create?: GameCreateWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameCreateOrConnectWithoutPublisherInput], {
    nullable: true
  })
  connectOrCreate?: GameCreateOrConnectWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => GameCreateManyPublisherInputEnvelope, {
    nullable: true
  })
  createMany?: GameCreateManyPublisherInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  connect?: GameWhereUniqueInput[] | undefined;
}
