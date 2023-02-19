import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateNestedManyWithoutPlatformsInput } from "../inputs/GameCreateNestedManyWithoutPlatformsInput";

@TypeGraphQL.InputType("PlatformCreateInput", {
  isAbstract: true
})
export class PlatformCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => GameCreateNestedManyWithoutPlatformsInput, {
    nullable: true
  })
  games?: GameCreateNestedManyWithoutPlatformsInput | undefined;
}
