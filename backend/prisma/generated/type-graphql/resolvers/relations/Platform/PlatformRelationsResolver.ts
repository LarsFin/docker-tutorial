import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Game } from "../../../models/Game";
import { Platform } from "../../../models/Platform";
import { PlatformGamesArgs } from "./args/PlatformGamesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Platform)
export class PlatformRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Game], {
    nullable: false
  })
  async games(@TypeGraphQL.Root() platform: Platform, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PlatformGamesArgs): Promise<Game[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).platform.findUnique({
      where: {
        id: platform.id,
      },
    }).games({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
