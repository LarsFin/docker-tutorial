import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformWhereUniqueInput } from "../../../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePlatformArgs {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;
}
