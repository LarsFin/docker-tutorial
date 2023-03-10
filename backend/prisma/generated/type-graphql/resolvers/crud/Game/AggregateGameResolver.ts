import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGameArgs } from "./args/AggregateGameArgs";
import { Game } from "../../../models/Game";
import { AggregateGame } from "../../outputs/AggregateGame";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Game)
export class AggregateGameResolver {
  @TypeGraphQL.Query(_returns => AggregateGame, {
    nullable: false
  })
  async aggregateGame(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGameArgs): Promise<AggregateGame> {
    return getPrismaFromContext(ctx).game.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
