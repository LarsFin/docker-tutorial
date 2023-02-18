import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherCreateOrConnectWithoutGamesInput } from "../inputs/PublisherCreateOrConnectWithoutGamesInput";
import { PublisherCreateWithoutGamesInput } from "../inputs/PublisherCreateWithoutGamesInput";
import { PublisherUpdateWithoutGamesInput } from "../inputs/PublisherUpdateWithoutGamesInput";
import { PublisherUpsertWithoutGamesInput } from "../inputs/PublisherUpsertWithoutGamesInput";
import { PublisherWhereUniqueInput } from "../inputs/PublisherWhereUniqueInput";

@TypeGraphQL.InputType("PublisherUpdateOneWithoutGamesNestedInput", {
  isAbstract: true
})
export class PublisherUpdateOneWithoutGamesNestedInput {
  @TypeGraphQL.Field(_type => PublisherCreateWithoutGamesInput, {
    nullable: true
  })
  create?: PublisherCreateWithoutGamesInput | undefined;

  @TypeGraphQL.Field(_type => PublisherCreateOrConnectWithoutGamesInput, {
    nullable: true
  })
  connectOrCreate?: PublisherCreateOrConnectWithoutGamesInput | undefined;

  @TypeGraphQL.Field(_type => PublisherUpsertWithoutGamesInput, {
    nullable: true
  })
  upsert?: PublisherUpsertWithoutGamesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PublisherWhereUniqueInput, {
    nullable: true
  })
  connect?: PublisherWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PublisherUpdateWithoutGamesInput, {
    nullable: true
  })
  update?: PublisherUpdateWithoutGamesInput | undefined;
}
