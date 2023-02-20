import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Genre: crudResolvers.GenreCrudResolver,
  Platform: crudResolvers.PlatformCrudResolver,
  Game: crudResolvers.GameCrudResolver,
  Publisher: crudResolvers.PublisherCrudResolver
};
const actionResolversMap = {
  Genre: {
    aggregateGenre: actionResolvers.AggregateGenreResolver,
    createManyGenre: actionResolvers.CreateManyGenreResolver,
    createOneGenre: actionResolvers.CreateOneGenreResolver,
    deleteManyGenre: actionResolvers.DeleteManyGenreResolver,
    deleteOneGenre: actionResolvers.DeleteOneGenreResolver,
    findFirstGenre: actionResolvers.FindFirstGenreResolver,
    findFirstGenreOrThrow: actionResolvers.FindFirstGenreOrThrowResolver,
    genres: actionResolvers.FindManyGenreResolver,
    genre: actionResolvers.FindUniqueGenreResolver,
    getGenre: actionResolvers.FindUniqueGenreOrThrowResolver,
    groupByGenre: actionResolvers.GroupByGenreResolver,
    updateManyGenre: actionResolvers.UpdateManyGenreResolver,
    updateOneGenre: actionResolvers.UpdateOneGenreResolver,
    upsertOneGenre: actionResolvers.UpsertOneGenreResolver
  },
  Platform: {
    aggregatePlatform: actionResolvers.AggregatePlatformResolver,
    createManyPlatform: actionResolvers.CreateManyPlatformResolver,
    createOnePlatform: actionResolvers.CreateOnePlatformResolver,
    deleteManyPlatform: actionResolvers.DeleteManyPlatformResolver,
    deleteOnePlatform: actionResolvers.DeleteOnePlatformResolver,
    findFirstPlatform: actionResolvers.FindFirstPlatformResolver,
    findFirstPlatformOrThrow: actionResolvers.FindFirstPlatformOrThrowResolver,
    platforms: actionResolvers.FindManyPlatformResolver,
    platform: actionResolvers.FindUniquePlatformResolver,
    getPlatform: actionResolvers.FindUniquePlatformOrThrowResolver,
    groupByPlatform: actionResolvers.GroupByPlatformResolver,
    updateManyPlatform: actionResolvers.UpdateManyPlatformResolver,
    updateOnePlatform: actionResolvers.UpdateOnePlatformResolver,
    upsertOnePlatform: actionResolvers.UpsertOnePlatformResolver
  },
  Game: {
    aggregateGame: actionResolvers.AggregateGameResolver,
    createManyGame: actionResolvers.CreateManyGameResolver,
    createOneGame: actionResolvers.CreateOneGameResolver,
    deleteManyGame: actionResolvers.DeleteManyGameResolver,
    deleteOneGame: actionResolvers.DeleteOneGameResolver,
    findFirstGame: actionResolvers.FindFirstGameResolver,
    findFirstGameOrThrow: actionResolvers.FindFirstGameOrThrowResolver,
    games: actionResolvers.FindManyGameResolver,
    game: actionResolvers.FindUniqueGameResolver,
    getGame: actionResolvers.FindUniqueGameOrThrowResolver,
    groupByGame: actionResolvers.GroupByGameResolver,
    updateManyGame: actionResolvers.UpdateManyGameResolver,
    updateOneGame: actionResolvers.UpdateOneGameResolver,
    upsertOneGame: actionResolvers.UpsertOneGameResolver
  },
  Publisher: {
    aggregatePublisher: actionResolvers.AggregatePublisherResolver,
    createManyPublisher: actionResolvers.CreateManyPublisherResolver,
    createOnePublisher: actionResolvers.CreateOnePublisherResolver,
    deleteManyPublisher: actionResolvers.DeleteManyPublisherResolver,
    deleteOnePublisher: actionResolvers.DeleteOnePublisherResolver,
    findFirstPublisher: actionResolvers.FindFirstPublisherResolver,
    findFirstPublisherOrThrow: actionResolvers.FindFirstPublisherOrThrowResolver,
    publishers: actionResolvers.FindManyPublisherResolver,
    publisher: actionResolvers.FindUniquePublisherResolver,
    getPublisher: actionResolvers.FindUniquePublisherOrThrowResolver,
    groupByPublisher: actionResolvers.GroupByPublisherResolver,
    updateManyPublisher: actionResolvers.UpdateManyPublisherResolver,
    updateOnePublisher: actionResolvers.UpdateOnePublisherResolver,
    upsertOnePublisher: actionResolvers.UpsertOnePublisherResolver
  }
};
const crudResolversInfo = {
  Genre: ["aggregateGenre", "createManyGenre", "createOneGenre", "deleteManyGenre", "deleteOneGenre", "findFirstGenre", "findFirstGenreOrThrow", "genres", "genre", "getGenre", "groupByGenre", "updateManyGenre", "updateOneGenre", "upsertOneGenre"],
  Platform: ["aggregatePlatform", "createManyPlatform", "createOnePlatform", "deleteManyPlatform", "deleteOnePlatform", "findFirstPlatform", "findFirstPlatformOrThrow", "platforms", "platform", "getPlatform", "groupByPlatform", "updateManyPlatform", "updateOnePlatform", "upsertOnePlatform"],
  Game: ["aggregateGame", "createManyGame", "createOneGame", "deleteManyGame", "deleteOneGame", "findFirstGame", "findFirstGameOrThrow", "games", "game", "getGame", "groupByGame", "updateManyGame", "updateOneGame", "upsertOneGame"],
  Publisher: ["aggregatePublisher", "createManyPublisher", "createOnePublisher", "deleteManyPublisher", "deleteOnePublisher", "findFirstPublisher", "findFirstPublisherOrThrow", "publishers", "publisher", "getPublisher", "groupByPublisher", "updateManyPublisher", "updateOnePublisher", "upsertOnePublisher"]
};
const argsInfo = {
  AggregateGenreArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyGenreArgs: ["data", "skipDuplicates"],
  CreateOneGenreArgs: ["data"],
  DeleteManyGenreArgs: ["where"],
  DeleteOneGenreArgs: ["where"],
  FindFirstGenreArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstGenreOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGenreArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueGenreArgs: ["where"],
  FindUniqueGenreOrThrowArgs: ["where"],
  GroupByGenreArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyGenreArgs: ["data", "where"],
  UpdateOneGenreArgs: ["data", "where"],
  UpsertOneGenreArgs: ["where", "create", "update"],
  AggregatePlatformArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPlatformArgs: ["data", "skipDuplicates"],
  CreateOnePlatformArgs: ["data"],
  DeleteManyPlatformArgs: ["where"],
  DeleteOnePlatformArgs: ["where"],
  FindFirstPlatformArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPlatformOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlatformArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePlatformArgs: ["where"],
  FindUniquePlatformOrThrowArgs: ["where"],
  GroupByPlatformArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPlatformArgs: ["data", "where"],
  UpdateOnePlatformArgs: ["data", "where"],
  UpsertOnePlatformArgs: ["where", "create", "update"],
  AggregateGameArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyGameArgs: ["data", "skipDuplicates"],
  CreateOneGameArgs: ["data"],
  DeleteManyGameArgs: ["where"],
  DeleteOneGameArgs: ["where"],
  FindFirstGameArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstGameOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGameArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueGameArgs: ["where"],
  FindUniqueGameOrThrowArgs: ["where"],
  GroupByGameArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyGameArgs: ["data", "where"],
  UpdateOneGameArgs: ["data", "where"],
  UpsertOneGameArgs: ["where", "create", "update"],
  AggregatePublisherArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPublisherArgs: ["data", "skipDuplicates"],
  CreateOnePublisherArgs: ["data"],
  DeleteManyPublisherArgs: ["where"],
  DeleteOnePublisherArgs: ["where"],
  FindFirstPublisherArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPublisherOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPublisherArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePublisherArgs: ["where"],
  FindUniquePublisherOrThrowArgs: ["where"],
  GroupByPublisherArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPublisherArgs: ["data", "where"],
  UpdateOnePublisherArgs: ["data", "where"],
  UpsertOnePublisherArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Genre: relationResolvers.GenreRelationsResolver,
  Platform: relationResolvers.PlatformRelationsResolver,
  Game: relationResolvers.GameRelationsResolver,
  Publisher: relationResolvers.PublisherRelationsResolver
};
const relationResolversInfo = {
  Genre: ["games"],
  Platform: ["games"],
  Game: ["publisher", "genres", "platforms"],
  Publisher: ["games"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Genre: ["id", "slug"],
  Platform: ["id", "slug"],
  Game: ["id", "slug", "publisherId"],
  Publisher: ["id", "slug"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateGenre: ["_count", "_avg", "_sum", "_min", "_max"],
  GenreGroupBy: ["id", "slug", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlatform: ["_count", "_avg", "_sum", "_min", "_max"],
  PlatformGroupBy: ["id", "slug", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateGame: ["_count", "_avg", "_sum", "_min", "_max"],
  GameGroupBy: ["id", "slug", "publisherId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePublisher: ["_count", "_avg", "_sum", "_min", "_max"],
  PublisherGroupBy: ["id", "slug", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  GenreCount: ["games"],
  GenreCountAggregate: ["id", "slug", "_all"],
  GenreAvgAggregate: ["id"],
  GenreSumAggregate: ["id"],
  GenreMinAggregate: ["id", "slug"],
  GenreMaxAggregate: ["id", "slug"],
  PlatformCount: ["games"],
  PlatformCountAggregate: ["id", "slug", "_all"],
  PlatformAvgAggregate: ["id"],
  PlatformSumAggregate: ["id"],
  PlatformMinAggregate: ["id", "slug"],
  PlatformMaxAggregate: ["id", "slug"],
  GameCount: ["genres", "platforms"],
  GameCountAggregate: ["id", "slug", "publisherId", "_all"],
  GameAvgAggregate: ["id", "publisherId"],
  GameSumAggregate: ["id", "publisherId"],
  GameMinAggregate: ["id", "slug", "publisherId"],
  GameMaxAggregate: ["id", "slug", "publisherId"],
  PublisherCount: ["games"],
  PublisherCountAggregate: ["id", "slug", "_all"],
  PublisherAvgAggregate: ["id"],
  PublisherSumAggregate: ["id"],
  PublisherMinAggregate: ["id", "slug"],
  PublisherMaxAggregate: ["id", "slug"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  GenreWhereInput: ["AND", "OR", "NOT", "id", "slug", "games"],
  GenreOrderByWithRelationInput: ["id", "slug", "games"],
  GenreWhereUniqueInput: ["id"],
  GenreOrderByWithAggregationInput: ["id", "slug", "_count", "_avg", "_max", "_min", "_sum"],
  GenreScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "slug"],
  PlatformWhereInput: ["AND", "OR", "NOT", "id", "slug", "games"],
  PlatformOrderByWithRelationInput: ["id", "slug", "games"],
  PlatformWhereUniqueInput: ["id"],
  PlatformOrderByWithAggregationInput: ["id", "slug", "_count", "_avg", "_max", "_min", "_sum"],
  PlatformScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "slug"],
  GameWhereInput: ["AND", "OR", "NOT", "id", "slug", "publisher", "publisherId", "genres", "platforms"],
  GameOrderByWithRelationInput: ["id", "slug", "publisher", "publisherId", "genres", "platforms"],
  GameWhereUniqueInput: ["id"],
  GameOrderByWithAggregationInput: ["id", "slug", "publisherId", "_count", "_avg", "_max", "_min", "_sum"],
  GameScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "slug", "publisherId"],
  PublisherWhereInput: ["AND", "OR", "NOT", "id", "slug", "games"],
  PublisherOrderByWithRelationInput: ["id", "slug", "games"],
  PublisherWhereUniqueInput: ["id"],
  PublisherOrderByWithAggregationInput: ["id", "slug", "_count", "_avg", "_max", "_min", "_sum"],
  PublisherScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "slug"],
  GenreCreateInput: ["slug", "games"],
  GenreUpdateInput: ["slug", "games"],
  GenreCreateManyInput: ["id", "slug"],
  GenreUpdateManyMutationInput: ["slug"],
  PlatformCreateInput: ["slug", "games"],
  PlatformUpdateInput: ["slug", "games"],
  PlatformCreateManyInput: ["id", "slug"],
  PlatformUpdateManyMutationInput: ["slug"],
  GameCreateInput: ["slug", "publisher", "genres", "platforms"],
  GameUpdateInput: ["slug", "publisher", "genres", "platforms"],
  GameCreateManyInput: ["id", "slug", "publisherId"],
  GameUpdateManyMutationInput: ["slug"],
  PublisherCreateInput: ["slug", "games"],
  PublisherUpdateInput: ["slug", "games"],
  PublisherCreateManyInput: ["id", "slug"],
  PublisherUpdateManyMutationInput: ["slug"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  GameListRelationFilter: ["every", "some", "none"],
  GameOrderByRelationAggregateInput: ["_count"],
  GenreCountOrderByAggregateInput: ["id", "slug"],
  GenreAvgOrderByAggregateInput: ["id"],
  GenreMaxOrderByAggregateInput: ["id", "slug"],
  GenreMinOrderByAggregateInput: ["id", "slug"],
  GenreSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  PlatformCountOrderByAggregateInput: ["id", "slug"],
  PlatformAvgOrderByAggregateInput: ["id"],
  PlatformMaxOrderByAggregateInput: ["id", "slug"],
  PlatformMinOrderByAggregateInput: ["id", "slug"],
  PlatformSumOrderByAggregateInput: ["id"],
  PublisherRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  GenreListRelationFilter: ["every", "some", "none"],
  PlatformListRelationFilter: ["every", "some", "none"],
  GenreOrderByRelationAggregateInput: ["_count"],
  PlatformOrderByRelationAggregateInput: ["_count"],
  GameCountOrderByAggregateInput: ["id", "slug", "publisherId"],
  GameAvgOrderByAggregateInput: ["id", "publisherId"],
  GameMaxOrderByAggregateInput: ["id", "slug", "publisherId"],
  GameMinOrderByAggregateInput: ["id", "slug", "publisherId"],
  GameSumOrderByAggregateInput: ["id", "publisherId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  PublisherCountOrderByAggregateInput: ["id", "slug"],
  PublisherAvgOrderByAggregateInput: ["id"],
  PublisherMaxOrderByAggregateInput: ["id", "slug"],
  PublisherMinOrderByAggregateInput: ["id", "slug"],
  PublisherSumOrderByAggregateInput: ["id"],
  GameCreateNestedManyWithoutGenresInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  GameUpdateManyWithoutGenresNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  GameCreateNestedManyWithoutPlatformsInput: ["create", "connectOrCreate", "connect"],
  GameUpdateManyWithoutPlatformsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PublisherCreateNestedOneWithoutGamesInput: ["create", "connectOrCreate", "connect"],
  GenreCreateNestedManyWithoutGamesInput: ["create", "connectOrCreate", "connect"],
  PlatformCreateNestedManyWithoutGamesInput: ["create", "connectOrCreate", "connect"],
  PublisherUpdateOneWithoutGamesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  GenreUpdateManyWithoutGamesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PlatformUpdateManyWithoutGamesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  GameCreateNestedManyWithoutPublisherInput: ["create", "connectOrCreate", "createMany", "connect"],
  GameUpdateManyWithoutPublisherNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  GameCreateWithoutGenresInput: ["slug", "publisher", "platforms"],
  GameCreateOrConnectWithoutGenresInput: ["where", "create"],
  GameUpsertWithWhereUniqueWithoutGenresInput: ["where", "update", "create"],
  GameUpdateWithWhereUniqueWithoutGenresInput: ["where", "data"],
  GameUpdateManyWithWhereWithoutGenresInput: ["where", "data"],
  GameScalarWhereInput: ["AND", "OR", "NOT", "id", "slug", "publisherId"],
  GameCreateWithoutPlatformsInput: ["slug", "publisher", "genres"],
  GameCreateOrConnectWithoutPlatformsInput: ["where", "create"],
  GameUpsertWithWhereUniqueWithoutPlatformsInput: ["where", "update", "create"],
  GameUpdateWithWhereUniqueWithoutPlatformsInput: ["where", "data"],
  GameUpdateManyWithWhereWithoutPlatformsInput: ["where", "data"],
  PublisherCreateWithoutGamesInput: ["slug"],
  PublisherCreateOrConnectWithoutGamesInput: ["where", "create"],
  GenreCreateWithoutGamesInput: ["slug"],
  GenreCreateOrConnectWithoutGamesInput: ["where", "create"],
  PlatformCreateWithoutGamesInput: ["slug"],
  PlatformCreateOrConnectWithoutGamesInput: ["where", "create"],
  PublisherUpsertWithoutGamesInput: ["update", "create"],
  PublisherUpdateWithoutGamesInput: ["slug"],
  GenreUpsertWithWhereUniqueWithoutGamesInput: ["where", "update", "create"],
  GenreUpdateWithWhereUniqueWithoutGamesInput: ["where", "data"],
  GenreUpdateManyWithWhereWithoutGamesInput: ["where", "data"],
  GenreScalarWhereInput: ["AND", "OR", "NOT", "id", "slug"],
  PlatformUpsertWithWhereUniqueWithoutGamesInput: ["where", "update", "create"],
  PlatformUpdateWithWhereUniqueWithoutGamesInput: ["where", "data"],
  PlatformUpdateManyWithWhereWithoutGamesInput: ["where", "data"],
  PlatformScalarWhereInput: ["AND", "OR", "NOT", "id", "slug"],
  GameCreateWithoutPublisherInput: ["slug", "genres", "platforms"],
  GameCreateOrConnectWithoutPublisherInput: ["where", "create"],
  GameCreateManyPublisherInputEnvelope: ["data", "skipDuplicates"],
  GameUpsertWithWhereUniqueWithoutPublisherInput: ["where", "update", "create"],
  GameUpdateWithWhereUniqueWithoutPublisherInput: ["where", "data"],
  GameUpdateManyWithWhereWithoutPublisherInput: ["where", "data"],
  GameUpdateWithoutGenresInput: ["slug", "publisher", "platforms"],
  GameUpdateWithoutPlatformsInput: ["slug", "publisher", "genres"],
  GenreUpdateWithoutGamesInput: ["slug"],
  PlatformUpdateWithoutGamesInput: ["slug"],
  GameCreateManyPublisherInput: ["id", "slug"],
  GameUpdateWithoutPublisherInput: ["slug", "genres", "platforms"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

