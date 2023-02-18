import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateManyPublisherInputEnvelope } from "../inputs/GameCreateManyPublisherInputEnvelope";
import { GameCreateOrConnectWithoutPublisherInput } from "../inputs/GameCreateOrConnectWithoutPublisherInput";
import { GameCreateWithoutPublisherInput } from "../inputs/GameCreateWithoutPublisherInput";
import { GameScalarWhereInput } from "../inputs/GameScalarWhereInput";
import { GameUpdateManyWithWhereWithoutPublisherInput } from "../inputs/GameUpdateManyWithWhereWithoutPublisherInput";
import { GameUpdateWithWhereUniqueWithoutPublisherInput } from "../inputs/GameUpdateWithWhereUniqueWithoutPublisherInput";
import { GameUpsertWithWhereUniqueWithoutPublisherInput } from "../inputs/GameUpsertWithWhereUniqueWithoutPublisherInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpdateManyWithoutPublisherNestedInput", {
  isAbstract: true
})
export class GameUpdateManyWithoutPublisherNestedInput {
  @TypeGraphQL.Field(_type => [GameCreateWithoutPublisherInput], {
    nullable: true
  })
  create?: GameCreateWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameCreateOrConnectWithoutPublisherInput], {
    nullable: true
  })
  connectOrCreate?: GameCreateOrConnectWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpsertWithWhereUniqueWithoutPublisherInput], {
    nullable: true
  })
  upsert?: GameUpsertWithWhereUniqueWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => GameCreateManyPublisherInputEnvelope, {
    nullable: true
  })
  createMany?: GameCreateManyPublisherInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [GameUpdateWithWhereUniqueWithoutPublisherInput], {
    nullable: true
  })
  update?: GameUpdateWithWhereUniqueWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpdateManyWithWhereWithoutPublisherInput], {
    nullable: true
  })
  updateMany?: GameUpdateManyWithWhereWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GameScalarWhereInput[] | undefined;
}
