import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GameScalarWhereInput", {
  isAbstract: true
})
export class GameScalarWhereInput {
  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  AND?: GameScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  OR?: GameScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  NOT?: GameScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  coverUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  publisherId?: IntNullableFilter | undefined;
}
