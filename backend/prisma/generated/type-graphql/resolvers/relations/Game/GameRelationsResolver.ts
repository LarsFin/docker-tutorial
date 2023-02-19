import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Game } from "../../../models/Game";
import { Genre } from "../../../models/Genre";
import { Platform } from "../../../models/Platform";
import { Publisher } from "../../../models/Publisher";
import { GameGenresArgs } from "./args/GameGenresArgs";
import { GamePlatformsArgs } from "./args/GamePlatformsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Game)
export class GameRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Publisher, {
    nullable: true
  })
  async publisher(@TypeGraphQL.Root() game: Game, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Publisher | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).game.findUnique({
      where: {
        id: game.id,
      },
    }).publisher({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Genre], {
    nullable: false
  })
  async genres(@TypeGraphQL.Root() game: Game, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GameGenresArgs): Promise<Genre[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).game.findUnique({
      where: {
        id: game.id,
      },
    }).genres({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Platform], {
    nullable: false
  })
  async platforms(@TypeGraphQL.Root() game: Game, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GamePlatformsArgs): Promise<Platform[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).game.findUnique({
      where: {
        id: game.id,
      },
    }).platforms({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
