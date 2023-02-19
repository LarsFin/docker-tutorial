import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateOrConnectWithoutPlatformsInput } from "../inputs/GameCreateOrConnectWithoutPlatformsInput";
import { GameCreateWithoutPlatformsInput } from "../inputs/GameCreateWithoutPlatformsInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameCreateNestedManyWithoutPlatformsInput", {
  isAbstract: true
})
export class GameCreateNestedManyWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => [GameCreateWithoutPlatformsInput], {
    nullable: true
  })
  create?: GameCreateWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameCreateOrConnectWithoutPlatformsInput], {
    nullable: true
  })
  connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  connect?: GameWhereUniqueInput[] | undefined;
}
