import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherCreateWithoutGamesInput } from "../inputs/PublisherCreateWithoutGamesInput";
import { PublisherUpdateWithoutGamesInput } from "../inputs/PublisherUpdateWithoutGamesInput";

@TypeGraphQL.InputType("PublisherUpsertWithoutGamesInput", {
  isAbstract: true
})
export class PublisherUpsertWithoutGamesInput {
  @TypeGraphQL.Field(_type => PublisherUpdateWithoutGamesInput, {
    nullable: false
  })
  update!: PublisherUpdateWithoutGamesInput;

  @TypeGraphQL.Field(_type => PublisherCreateWithoutGamesInput, {
    nullable: false
  })
  create!: PublisherCreateWithoutGamesInput;
}
