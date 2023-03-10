import * as TypeGraphQL from "type-graphql";

export enum PublisherScalarFieldEnum {
  id = "id",
  slug = "slug",
  imgSrc = "imgSrc"
}
TypeGraphQL.registerEnumType(PublisherScalarFieldEnum, {
  name: "PublisherScalarFieldEnum",
  description: undefined,
});
