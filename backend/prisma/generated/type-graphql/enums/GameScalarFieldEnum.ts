import * as TypeGraphQL from "type-graphql";

export enum GameScalarFieldEnum {
  id = "id",
  slug = "slug",
  publisherId = "publisherId"
}
TypeGraphQL.registerEnumType(GameScalarFieldEnum, {
  name: "GameScalarFieldEnum",
  description: undefined,
});
