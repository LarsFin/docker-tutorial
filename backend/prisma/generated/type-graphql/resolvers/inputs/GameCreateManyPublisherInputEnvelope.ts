import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateManyPublisherInput } from "../inputs/GameCreateManyPublisherInput";

@TypeGraphQL.InputType("GameCreateManyPublisherInputEnvelope", {
  isAbstract: true
})
export class GameCreateManyPublisherInputEnvelope {
  @TypeGraphQL.Field(_type => [GameCreateManyPublisherInput], {
    nullable: false
  })
  data!: GameCreateManyPublisherInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
