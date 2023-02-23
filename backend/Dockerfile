# base image we're pulling from
FROM node:18-alpine

# <--- Layer Created

# set the work dir in the image, this is simply sets the path to continue instructions from
WORKDIR /home/node

# <--- Layer Created

# add dumb-init to help us signal from local to docker process
RUN apk add dumb-init

# <--- Layer Created

# copy files from local to image
COPY . .

# <--- Layer Created

# set environment file
RUN mv .docker.env .env

# <--- Layer Created

# install node module dependencies
RUN yarn

# <--- Layer Created

# transpile ts to executable js
RUN yarn prisma:generate && yarn build

# <--- Layer Created

# define entrypoint
ENTRYPOINT ["dumb-init", "yarn"]
CMD ["start"]
