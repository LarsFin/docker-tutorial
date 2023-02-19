import * as TypeGraphQL from "type-graphql";

export enum PlatformScalarFieldEnum {
  id = "id",
  slug = "slug"
}
TypeGraphQL.registerEnumType(PlatformScalarFieldEnum, {
  name: "PlatformScalarFieldEnum",
  description: undefined,
});
