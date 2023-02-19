import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePlatformArgs } from "./args/AggregatePlatformArgs";
import { Platform } from "../../../models/Platform";
import { AggregatePlatform } from "../../outputs/AggregatePlatform";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Platform)
export class AggregatePlatformResolver {
  @TypeGraphQL.Query(_returns => AggregatePlatform, {
    nullable: false
  })
  async aggregatePlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlatformArgs): Promise<AggregatePlatform> {
    return getPrismaFromContext(ctx).platform.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
