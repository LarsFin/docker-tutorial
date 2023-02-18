import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherCreateOrConnectWithoutGamesInput } from "../inputs/PublisherCreateOrConnectWithoutGamesInput";
import { PublisherCreateWithoutGamesInput } from "../inputs/PublisherCreateWithoutGamesInput";
import { PublisherWhereUniqueInput } from "../inputs/PublisherWhereUniqueInput";

@TypeGraphQL.InputType("PublisherCreateNestedOneWithoutGamesInput", {
  isAbstract: true
})
export class PublisherCreateNestedOneWithoutGamesInput {
  @TypeGraphQL.Field(_type => PublisherCreateWithoutGamesInput, {
    nullable: true
  })
  create?: PublisherCreateWithoutGamesInput | undefined;

  @TypeGraphQL.Field(_type => PublisherCreateOrConnectWithoutGamesInput, {
    nullable: true
  })
  connectOrCreate?: PublisherCreateOrConnectWithoutGamesInput | undefined;

  @TypeGraphQL.Field(_type => PublisherWhereUniqueInput, {
    nullable: true
  })
  connect?: PublisherWhereUniqueInput | undefined;
}
