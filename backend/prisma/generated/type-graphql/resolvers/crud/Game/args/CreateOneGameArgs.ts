import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GameCreateInput } from "../../../inputs/GameCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGameArgs {
  @TypeGraphQL.Field(_type => GameCreateInput, {
    nullable: false
  })
  data!: GameCreateInput;
}
