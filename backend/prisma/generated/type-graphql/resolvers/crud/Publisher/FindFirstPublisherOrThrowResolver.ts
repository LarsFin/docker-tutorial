import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPublisherOrThrowArgs } from "./args/FindFirstPublisherOrThrowArgs";
import { Publisher } from "../../../models/Publisher";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Publisher)
export class FindFirstPublisherOrThrowResolver {
  @TypeGraphQL.Query(_returns => Publisher, {
    nullable: true
  })
  async findFirstPublisherOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPublisherOrThrowArgs): Promise<Publisher | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).publisher.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
