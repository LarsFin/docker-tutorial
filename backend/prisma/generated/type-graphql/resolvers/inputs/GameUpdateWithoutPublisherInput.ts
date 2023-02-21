import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreUpdateManyWithoutGamesNestedInput } from "../inputs/GenreUpdateManyWithoutGamesNestedInput";
import { PlatformUpdateManyWithoutGamesNestedInput } from "../inputs/PlatformUpdateManyWithoutGamesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GameUpdateWithoutPublisherInput", {
  isAbstract: true
})
export class GameUpdateWithoutPublisherInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  imgSrc?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GenreUpdateManyWithoutGamesNestedInput, {
    nullable: true
  })
  genres?: GenreUpdateManyWithoutGamesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PlatformUpdateManyWithoutGamesNestedInput, {
    nullable: true
  })
  platforms?: PlatformUpdateManyWithoutGamesNestedInput | undefined;
}
