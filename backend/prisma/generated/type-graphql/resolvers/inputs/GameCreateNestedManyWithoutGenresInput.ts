import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateOrConnectWithoutGenresInput } from "../inputs/GameCreateOrConnectWithoutGenresInput";
import { GameCreateWithoutGenresInput } from "../inputs/GameCreateWithoutGenresInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameCreateNestedManyWithoutGenresInput", {
  isAbstract: true
})
export class GameCreateNestedManyWithoutGenresInput {
  @TypeGraphQL.Field(_type => [GameCreateWithoutGenresInput], {
    nullable: true
  })
  create?: GameCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameCreateOrConnectWithoutGenresInput], {
    nullable: true
  })
  connectOrCreate?: GameCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  connect?: GameWhereUniqueInput[] | undefined;
}
