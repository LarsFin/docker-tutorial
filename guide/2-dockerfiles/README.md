# Dockerfiles

Now we'll take a look at building an image from a Dockerfile and running a container with said image.

The Dockerfile in question can be found [here](../../backend/Dockerfile).
`backend` is a simple Graphql API using Prisma as an ORM!

## Building an Image

To build the image you can use the command as below:
```console
docker build -t docker_demo:latest .
```

You should now see `docker_demo` in your listed docker images.
Next, we'll run the image:
```console
docker run --name demo-app docker_demo:latest
yarn run v1.22.19
$ node build/src/index.js
2023-02-23 08:02:09.606	INFO	/build/src/index.js:35	Backend API started on port 4040
```

Sweet, we can see our application has started on port 4040. Let's open another terminal and try access it:
```
open http://localhost:4040/
```

No luck!

![unreachable](./imgs/site-unreachable.png)

When listing our containers, we can see that no ports are given:
```
docker ps
CONTAINER ID   IMAGE                COMMAND                  CREATED         STATUS         PORTS     NAMES
7f3cba67c84f   docker_demo:latest   "dumb-init yarn start"   4 seconds ago   Up 3 seconds             demo-app
```

Let's use `-p` to bind our local ports with the container:
```
docker run -p 4040:4040 --name demo-app docker_demo:latest
```

Let's take a look at our container in more detail:
```
docker inspect demo-app
```

Now when we open [localhost](http://localhost:4040), we're greeted with something more promising:

![Index Hit](./imgs/index-hit.png)

Because this is a graphql app and has been configured with `graphiql`; we can go to [/graphql](http://localhost:4040/graphql)


Great, let's try a simple query in graphiql:
```graphql
query {
  genres {
    id
    slug
  }
}
```

You should get a mighty error! This shouldn't be to much of a surprise as we don't have a database configured nor any tables.

Let's start our postgres container again:
```
docker run --name pg-docker -e POSTGRES_PASSWORD=pass123 -e POSTGRES_USER=docker_user -e POSTGRES_DB=docker_demo -d postgres:15-alpine
```

We'll also have to make sure we have the correct `DATABASE_URL` environment variable in our demo application.
First, stop the app container:
```
docker stop demo-app
```

Afterwards run a new container with the env var passed correctly:
```console
docker run --name demo-app -d -p 4040:4040 -e DATABASE_URL="postgres://docker_user:pass123@pg-docker/docker_demo" docker_demo:latest
```

We should have two docker containers running now, one for our demo application and the other for our database:
```console
docker ps
CONTAINER ID   IMAGE                COMMAND                  CREATED          STATUS          PORTS                    NAMES
faf355dbf846   postgres:15-alpine   "docker-entrypoint.s…"   53 seconds ago   Up 53 seconds   5432/tcp                 pg-docker
64b2ac4dec42   docker_demo:latest   "dumb-init yarn start"   13 minutes ago   Up 13 minutes   0.0.0.0:4040->4040/tcp   demo-app
```

Alright, it's time to take a look into docker networks. These describe the way docker containers communicate with the host, external systems and other containers.

Let's jump into our demo app container:
```console
docker exec -it demo-app sh
```

Now a simple check as to whether two containers can talk to eachother is using `ping`
```console
ping pg-docker
ping: bad address 'pg-docker'
```

If two containers can communicate with one another via docker networking you can use the container names in place of their DNS name or IP.

Let's set up a Docker network:
```console
docker network create demo_net
```

You should see it in your Docker network list:
```console
docker network ls
```

We can inspect the Docker network:
```console
docker network inspect demo_net
```

We can see that the `Containers` blob is empty.
Let's connect our containers to the network:
```console
docker network connect demo_net demo-app
docker network connect demo_net pg-docker
```

Inspecting the network again we can see the containers have been added!

Now let's get back to the task at hand of making a successful graphql query.
Let's create an interactive session in `demo-app`;
```console
docker exec -it demo-app sh
```

We can now successfully communicate between the containers!
```console
ping pg-docker
PING pg-docker (172.19.0.3): 56 data bytes
64 bytes from 172.19.0.3: seq=0 ttl=64 time=0.462 ms
64 bytes from 172.19.0.3: seq=1 ttl=64 time=0.338 ms
```

While we're here let's perform the migration:
```console
yarn prisma:migrate
```

Exit the session and restart the app:
```console
docker restart demo-app
```

Now we can go back to [graphql](http://localhost:4040/graphql) and try our query again:
```graphql
query {
  genres {
    id
    slug
  }
}
```

Hooray, we now have a postgres container which is being read from a containerised application!
