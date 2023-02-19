import "reflect-metadata";
import express from "express";
import { loadConfig } from "./config";
import { Logger } from "tslog";
import { buildSchema } from "type-graphql";
import { graphqlHTTP } from "express-graphql";
import { resolvers } from "../prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";

const app = express();

const logger = new Logger();

const [config, err] = loadConfig();

const prisma = new PrismaClient();

if (err !== null) {
  logger.error(err);
  process.exit(1);
}

const configureGraphql = async () => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
      context: { prisma },
    })
  );
};

configureGraphql();

app.listen(config.PORT, () => {
  logger.info(`Backend API started on port ${config.PORT}`);
});
