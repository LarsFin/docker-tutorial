import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PublisherWhereUniqueInput } from "../../../inputs/PublisherWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePublisherOrThrowArgs {
  @TypeGraphQL.Field(_type => PublisherWhereUniqueInput, {
    nullable: false
  })
  where!: PublisherWhereUniqueInput;
}
