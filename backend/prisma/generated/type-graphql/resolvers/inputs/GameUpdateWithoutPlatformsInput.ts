import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreUpdateManyWithoutGamesNestedInput } from "../inputs/GenreUpdateManyWithoutGamesNestedInput";
import { PublisherUpdateOneWithoutGamesNestedInput } from "../inputs/PublisherUpdateOneWithoutGamesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GameUpdateWithoutPlatformsInput", {
  isAbstract: true
})
export class GameUpdateWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  imgSrc?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PublisherUpdateOneWithoutGamesNestedInput, {
    nullable: true
  })
  publisher?: PublisherUpdateOneWithoutGamesNestedInput | undefined;

  @TypeGraphQL.Field(_type => GenreUpdateManyWithoutGamesNestedInput, {
    nullable: true
  })
  genres?: GenreUpdateManyWithoutGamesNestedInput | undefined;
}
