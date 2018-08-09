FROM node:alpine

LABEL author="Kevin Schuchard"

WORKDIR /app

COPY package.json package.json

RUN yarn

COPY . .

RUN yarn build:client-and-server-bundles

EXPOSE 3000

ENTRYPOINT ["node", "dist/server.js"]