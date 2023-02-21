import * as TypeGraphQL from "type-graphql";

export enum GenreScalarFieldEnum {
  id = "id",
  slug = "slug",
  imgSrc = "imgSrc"
}
TypeGraphQL.registerEnumType(GenreScalarFieldEnum, {
  name: "GenreScalarFieldEnum",
  description: undefined,
});
