import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PlatformListRelationFilter } from "../inputs/PlatformListRelationFilter";
import { PublisherRelationFilter } from "../inputs/PublisherRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GameWhereInput", {
  isAbstract: true
})
export class GameWhereInput {
  @TypeGraphQL.Field(_type => [GameWhereInput], {
    nullable: true
  })
  AND?: GameWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereInput], {
    nullable: true
  })
  OR?: GameWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereInput], {
    nullable: true
  })
  NOT?: GameWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => PublisherRelationFilter, {
    nullable: true
  })
  publisher?: PublisherRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  publisherId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GenreListRelationFilter, {
    nullable: true
  })
  genres?: GenreListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PlatformListRelationFilter, {
    nullable: true
  })
  platforms?: PlatformListRelationFilter | undefined;
}
