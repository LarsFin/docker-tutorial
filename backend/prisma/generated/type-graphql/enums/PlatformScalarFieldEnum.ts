import * as TypeGraphQL from "type-graphql";

export enum PlatformScalarFieldEnum {
  id = "id",
  slug = "slug",
  imgSrc = "imgSrc"
}
TypeGraphQL.registerEnumType(PlatformScalarFieldEnum, {
  name: "PlatformScalarFieldEnum",
  description: undefined,
});
