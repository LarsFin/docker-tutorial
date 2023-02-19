import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateOrConnectWithoutGamesInput } from "../inputs/PlatformCreateOrConnectWithoutGamesInput";
import { PlatformCreateWithoutGamesInput } from "../inputs/PlatformCreateWithoutGamesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformCreateNestedManyWithoutGamesInput", {
  isAbstract: true
})
export class PlatformCreateNestedManyWithoutGamesInput {
  @TypeGraphQL.Field(_type => [PlatformCreateWithoutGamesInput], {
    nullable: true
  })
  create?: PlatformCreateWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformCreateOrConnectWithoutGamesInput], {
    nullable: true
  })
  connectOrCreate?: PlatformCreateOrConnectWithoutGamesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformWhereUniqueInput[] | undefined;
}
