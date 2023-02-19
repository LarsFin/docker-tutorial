import * as TypeGraphQL from "type-graphql";

export enum GameScalarFieldEnum {
  id = "id",
  slug = "slug",
  coverUrl = "coverUrl",
  publisherId = "publisherId"
}
TypeGraphQL.registerEnumType(GameScalarFieldEnum, {
  name: "GameScalarFieldEnum",
  description: undefined,
});
