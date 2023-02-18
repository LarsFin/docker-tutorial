import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutGamesInput } from "../inputs/GenreCreateOrConnectWithoutGamesInput";
import { GenreCreateWithoutGamesInput } from "../inputs/GenreCreateWithoutGamesInput";
import { GenreScalarWhereInput } from "../inputs/GenreScalarWhereInput";
import { GenreUpdateManyWithWhereWithoutGamesInput } from "../inputs/GenreUpdateManyWithWhereWithoutGamesInput";
import { GenreUpdateWithWhereUniqueWithoutGamesInput } from "../inputs/GenreUpdateWithWhereUniqueWithoutGamesInput";
import { GenreUpsertWithWhereUniqueWithoutGamesInput } from "../inputs/GenreUpsertWithWhereUniqueWithoutGamesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpdateManyWithoutGamesNestedInput", {
  isAbstract: true
})
export class GenreUpdateManyWithoutGamesNestedInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutGamesInput], {
    nullable: true
  })
  create?: GenreCreateWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutGamesInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpsertWithWhereUniqueWithoutGamesInput], {
    nullable: true
  })
  upsert?: GenreUpsertWithWhereUniqueWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  set?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  delete?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  connect?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpdateWithWhereUniqueWithoutGamesInput], {
    nullable: true
  })
  update?: GenreUpdateWithWhereUniqueWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpdateManyWithWhereWithoutGamesInput], {
    nullable: true
  })
  updateMany?: GenreUpdateManyWithWhereWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GenreScalarWhereInput[] | undefined;
}
