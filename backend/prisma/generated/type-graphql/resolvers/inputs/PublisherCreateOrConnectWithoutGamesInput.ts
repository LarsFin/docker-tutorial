import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherCreateWithoutGamesInput } from "../inputs/PublisherCreateWithoutGamesInput";
import { PublisherWhereUniqueInput } from "../inputs/PublisherWhereUniqueInput";

@TypeGraphQL.InputType("PublisherCreateOrConnectWithoutGamesInput", {
  isAbstract: true
})
export class PublisherCreateOrConnectWithoutGamesInput {
  @TypeGraphQL.Field(_type => PublisherWhereUniqueInput, {
    nullable: false
  })
  where!: PublisherWhereUniqueInput;

  @TypeGraphQL.Field(_type => PublisherCreateWithoutGamesInput, {
    nullable: false
  })
  create!: PublisherCreateWithoutGamesInput;
}
