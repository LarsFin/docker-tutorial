import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Game } from "../../../models/Game";
import { Publisher } from "../../../models/Publisher";
import { PublisherGamesArgs } from "./args/PublisherGamesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Publisher)
export class PublisherRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Game], {
    nullable: false
  })
  async games(@TypeGraphQL.Root() publisher: Publisher, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PublisherGamesArgs): Promise<Game[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).publisher.findUnique({
      where: {
        id: publisher.id,
      },
    }).games({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
