# Deploying demo application to github pages

This project is using [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) to publish the demo application to github pages.

## Table of Contents

- [Dependencies](#dependencies)
- [Deploy](#deploy)

## Dependencies
* [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) (tested with 0.5.2)

## Installation
Install `angular-cli-ghpages` globally via npm.
```shell
npm install -g angular-cli-ghpages
```

## Deploy

1) Build demo app with npm:
```shell
npm run build:demo
```
or with yarn:
```shell
yarn build:demo
```
This will generate all the necessary built files in the `/dist/ngx-height-toggle-app/` folder for publishing.

2) Publish built demo app to github pages with npm:
```shell
npm run deploy:demo
```
or with yarn:
```shell
yarn deploy:demo
```

3) View demo at https://bgolyoo.github.io/ngx-height-toggle
