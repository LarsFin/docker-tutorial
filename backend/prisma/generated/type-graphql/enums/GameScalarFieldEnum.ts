import * as TypeGraphQL from "type-graphql";

export enum GameScalarFieldEnum {
  id = "id",
  slug = "slug",
  imgSrc = "imgSrc",
  publisherId = "publisherId"
}
TypeGraphQL.registerEnumType(GameScalarFieldEnum, {
  name: "GameScalarFieldEnum",
  description: undefined,
});
