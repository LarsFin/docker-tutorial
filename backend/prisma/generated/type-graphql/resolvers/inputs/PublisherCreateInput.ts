import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateNestedManyWithoutPublisherInput } from "../inputs/GameCreateNestedManyWithoutPublisherInput";

@TypeGraphQL.InputType("PublisherCreateInput", {
  isAbstract: true
})
export class PublisherCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => GameCreateNestedManyWithoutPublisherInput, {
    nullable: true
  })
  games?: GameCreateNestedManyWithoutPublisherInput | undefined;
}
