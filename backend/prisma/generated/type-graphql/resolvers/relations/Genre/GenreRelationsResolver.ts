import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Game } from "../../../models/Game";
import { Genre } from "../../../models/Genre";
import { GenreGamesArgs } from "./args/GenreGamesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Genre)
export class GenreRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Game], {
    nullable: false
  })
  async games(@TypeGraphQL.Root() genre: Genre, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenreGamesArgs): Promise<Game[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genre.findUnique({
      where: {
        id: genre.id,
      },
    }).games({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
