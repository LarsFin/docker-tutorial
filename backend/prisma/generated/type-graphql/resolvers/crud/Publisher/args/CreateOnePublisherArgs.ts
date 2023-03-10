import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PublisherCreateInput } from "../../../inputs/PublisherCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePublisherArgs {
  @TypeGraphQL.Field(_type => PublisherCreateInput, {
    nullable: false
  })
  data!: PublisherCreateInput;
}
