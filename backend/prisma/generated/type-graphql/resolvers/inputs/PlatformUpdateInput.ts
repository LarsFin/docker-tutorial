import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameUpdateManyWithoutPlatformsNestedInput } from "../inputs/GameUpdateManyWithoutPlatformsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PlatformUpdateInput", {
  isAbstract: true
})
export class PlatformUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  imgSrc?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GameUpdateManyWithoutPlatformsNestedInput, {
    nullable: true
  })
  games?: GameUpdateManyWithoutPlatformsNestedInput | undefined;
}
