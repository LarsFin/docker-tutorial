import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("GenreCreateWithoutGamesInput", {
  isAbstract: true
})
export class GenreCreateWithoutGamesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imgSrc?: string | undefined;
}
