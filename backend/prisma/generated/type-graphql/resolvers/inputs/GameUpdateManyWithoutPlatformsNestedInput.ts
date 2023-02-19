import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateOrConnectWithoutPlatformsInput } from "../inputs/GameCreateOrConnectWithoutPlatformsInput";
import { GameCreateWithoutPlatformsInput } from "../inputs/GameCreateWithoutPlatformsInput";
import { GameScalarWhereInput } from "../inputs/GameScalarWhereInput";
import { GameUpdateManyWithWhereWithoutPlatformsInput } from "../inputs/GameUpdateManyWithWhereWithoutPlatformsInput";
import { GameUpdateWithWhereUniqueWithoutPlatformsInput } from "../inputs/GameUpdateWithWhereUniqueWithoutPlatformsInput";
import { GameUpsertWithWhereUniqueWithoutPlatformsInput } from "../inputs/GameUpsertWithWhereUniqueWithoutPlatformsInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpdateManyWithoutPlatformsNestedInput", {
  isAbstract: true
})
export class GameUpdateManyWithoutPlatformsNestedInput {
  @TypeGraphQL.Field(_type => [GameCreateWithoutPlatformsInput], {
    nullable: true
  })
  create?: GameCreateWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameCreateOrConnectWithoutPlatformsInput], {
    nullable: true
  })
  connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpsertWithWhereUniqueWithoutPlatformsInput], {
    nullable: true
  })
  upsert?: GameUpsertWithWhereUniqueWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  set?: GameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  delete?: GameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  connect?: GameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpdateWithWhereUniqueWithoutPlatformsInput], {
    nullable: true
  })
  update?: GameUpdateWithWhereUniqueWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpdateManyWithWhereWithoutPlatformsInput], {
    nullable: true
  })
  updateMany?: GameUpdateManyWithWhereWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GameScalarWhereInput[] | undefined;
}
