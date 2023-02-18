# Backend Service

A simple backend API which serves video game data that can be queried via graphql.

## Quick Start

You will need a postgres database instance running, you can use docker to achieve this with:

```console
docker run postgres:alpine
```

### Migration

For an initial migration you can use the command below which will apply all migrations in `./prisma/migrations` to your respective database.

```console
npx prisma migrate reset
```
