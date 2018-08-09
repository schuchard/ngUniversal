FROM node:alpine

LABEL author="Kevin Schuchard"

WORKDIR /app

COPY package.json package.json

COPY yarn.lock yarn.lock

RUN yarn

COPY . .

RUN yarn build:client-and-server-bundles

EXPOSE 4000

ENTRYPOINT ["node", "dist/server.js"]