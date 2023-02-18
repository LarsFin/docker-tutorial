import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameUpdateManyWithoutPublisherNestedInput } from "../inputs/GameUpdateManyWithoutPublisherNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PublisherUpdateInput", {
  isAbstract: true
})
export class PublisherUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GameUpdateManyWithoutPublisherNestedInput, {
    nullable: true
  })
  games?: GameUpdateManyWithoutPublisherNestedInput | undefined;
}
