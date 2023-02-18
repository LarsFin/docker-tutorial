import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GameCreateManyInput } from "../../../inputs/GameCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGameArgs {
  @TypeGraphQL.Field(_type => [GameCreateManyInput], {
    nullable: false
  })
  data!: GameCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
