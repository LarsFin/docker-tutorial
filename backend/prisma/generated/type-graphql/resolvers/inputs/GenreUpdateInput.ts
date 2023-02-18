import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameUpdateManyWithoutGenresNestedInput } from "../inputs/GameUpdateManyWithoutGenresNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GenreUpdateInput", {
  isAbstract: true
})
export class GenreUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GameUpdateManyWithoutGenresNestedInput, {
    nullable: true
  })
  games?: GameUpdateManyWithoutGenresNestedInput | undefined;
}
