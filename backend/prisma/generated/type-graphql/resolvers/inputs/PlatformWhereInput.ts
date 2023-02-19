import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameListRelationFilter } from "../inputs/GameListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PlatformWhereInput", {
  isAbstract: true
})
export class PlatformWhereInput {
  @TypeGraphQL.Field(_type => [PlatformWhereInput], {
    nullable: true
  })
  AND?: PlatformWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereInput], {
    nullable: true
  })
  OR?: PlatformWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereInput], {
    nullable: true
  })
  NOT?: PlatformWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => GameListRelationFilter, {
    nullable: true
  })
  games?: GameListRelationFilter | undefined;
}
