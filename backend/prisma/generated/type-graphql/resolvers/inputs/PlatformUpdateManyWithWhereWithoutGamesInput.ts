import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformScalarWhereInput } from "../inputs/PlatformScalarWhereInput";
import { PlatformUpdateManyMutationInput } from "../inputs/PlatformUpdateManyMutationInput";

@TypeGraphQL.InputType("PlatformUpdateManyWithWhereWithoutGamesInput", {
  isAbstract: true
})
export class PlatformUpdateManyWithWhereWithoutGamesInput {
  @TypeGraphQL.Field(_type => PlatformScalarWhereInput, {
    nullable: false
  })
  where!: PlatformScalarWhereInput;

  @TypeGraphQL.Field(_type => PlatformUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlatformUpdateManyMutationInput;
}
