import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameListRelationFilter } from "../inputs/GameListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GenreWhereInput", {
  isAbstract: true
})
export class GenreWhereInput {
  @TypeGraphQL.Field(_type => [GenreWhereInput], {
    nullable: true
  })
  AND?: GenreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereInput], {
    nullable: true
  })
  OR?: GenreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereInput], {
    nullable: true
  })
  NOT?: GenreWhereInput[] | undefined;

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
  imgSrc?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => GameListRelationFilter, {
    nullable: true
  })
  games?: GameListRelationFilter | undefined;
}
