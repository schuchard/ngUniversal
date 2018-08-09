# Angular Universal Starter


## Getting Started

- [Angular-CLI Wiki guide](https://github.com/angular/angular-cli/wiki/stories-universal-rendering)
- [Angular Universal @nguniversal](https://github.com/angular/universal)
- [ng-module-map-ngfactory-loader](https://github.com/angular/universal/modules/module-map-ngfactory-loader) to enable Lazy Loading.

---

### Installation
`yarn`

### Development (Client-side only rendering)
* run `yarn start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`yarn build:ssr && yarn serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`yarn build:prerender && yarn serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`

## Universal "Gotchas"
[/angular/universal/blob/master/docs/gotchas.md](https://github.com/angular/universal/blob/master/docs/gotchas.md)

## Docker

## Running the Project Using Docker Containers

1. Install the Angular CLI

    `npm install -g @angular/cli`

2. Run `yarn`

3. Build the project

    `ng build`

4. Run `docker-compose build`

5. Run `docker-compose up`

6. Visit `http://localhost:4000`

If you'd like to run the `production` version run `docker-compose -f docker-compose.prod.yml [build | up]`. This uses a multi-stage Docker build process to create the nginx image for the Angular app.