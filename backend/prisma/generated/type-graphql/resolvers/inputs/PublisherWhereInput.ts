import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameListRelationFilter } from "../inputs/GameListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PublisherWhereInput", {
  isAbstract: true
})
export class PublisherWhereInput {
  @TypeGraphQL.Field(_type => [PublisherWhereInput], {
    nullable: true
  })
  AND?: PublisherWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PublisherWhereInput], {
    nullable: true
  })
  OR?: PublisherWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PublisherWhereInput], {
    nullable: true
  })
  NOT?: PublisherWhereInput[] | undefined;

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
