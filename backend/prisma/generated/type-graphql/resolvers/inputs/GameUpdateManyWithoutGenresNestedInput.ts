import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateOrConnectWithoutGenresInput } from "../inputs/GameCreateOrConnectWithoutGenresInput";
import { GameCreateWithoutGenresInput } from "../inputs/GameCreateWithoutGenresInput";
import { GameScalarWhereInput } from "../inputs/GameScalarWhereInput";
import { GameUpdateManyWithWhereWithoutGenresInput } from "../inputs/GameUpdateManyWithWhereWithoutGenresInput";
import { GameUpdateWithWhereUniqueWithoutGenresInput } from "../inputs/GameUpdateWithWhereUniqueWithoutGenresInput";
import { GameUpsertWithWhereUniqueWithoutGenresInput } from "../inputs/GameUpsertWithWhereUniqueWithoutGenresInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpdateManyWithoutGenresNestedInput", {
  isAbstract: true
})
export class GameUpdateManyWithoutGenresNestedInput {
  @TypeGraphQL.Field(_type => [GameCreateWithoutGenresInput], {
    nullable: true
  })
  create?: GameCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameCreateOrConnectWithoutGenresInput], {
    nullable: true
  })
  connectOrCreate?: GameCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpsertWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  upsert?: GameUpsertWithWhereUniqueWithoutGenresInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [GameUpdateWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  update?: GameUpdateWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpdateManyWithWhereWithoutGenresInput], {
    nullable: true
  })
  updateMany?: GameUpdateManyWithWhereWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GameScalarWhereInput[] | undefined;
}
