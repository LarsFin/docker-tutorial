import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateOrConnectWithoutGamesInput } from "../inputs/PlatformCreateOrConnectWithoutGamesInput";
import { PlatformCreateWithoutGamesInput } from "../inputs/PlatformCreateWithoutGamesInput";
import { PlatformScalarWhereInput } from "../inputs/PlatformScalarWhereInput";
import { PlatformUpdateManyWithWhereWithoutGamesInput } from "../inputs/PlatformUpdateManyWithWhereWithoutGamesInput";
import { PlatformUpdateWithWhereUniqueWithoutGamesInput } from "../inputs/PlatformUpdateWithWhereUniqueWithoutGamesInput";
import { PlatformUpsertWithWhereUniqueWithoutGamesInput } from "../inputs/PlatformUpsertWithWhereUniqueWithoutGamesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformUpdateManyWithoutGamesNestedInput", {
  isAbstract: true
})
export class PlatformUpdateManyWithoutGamesNestedInput {
  @TypeGraphQL.Field(_type => [PlatformCreateWithoutGamesInput], {
    nullable: true
  })
  create?: PlatformCreateWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformCreateOrConnectWithoutGamesInput], {
    nullable: true
  })
  connectOrCreate?: PlatformCreateOrConnectWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformUpsertWithWhereUniqueWithoutGamesInput], {
    nullable: true
  })
  upsert?: PlatformUpsertWithWhereUniqueWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  set?: PlatformWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlatformWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  delete?: PlatformWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformUpdateWithWhereUniqueWithoutGamesInput], {
    nullable: true
  })
  update?: PlatformUpdateWithWhereUniqueWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformUpdateManyWithWhereWithoutGamesInput], {
    nullable: true
  })
  updateMany?: PlatformUpdateManyWithWhereWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlatformScalarWhereInput[] | undefined;
}
