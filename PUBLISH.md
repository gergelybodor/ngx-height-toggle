# Publishing to npm

This project is using [ng-packagr](https://github.com/dherges/ng-packagr) to publish the ngx-height-toggle module as an npm package to the npm registry.

## Table of Contents

- [Dependencies](#dependencies)
- [Publish](#publish)

## Dependencies
* [ng-packagr](https://github.com/dherges/ng-packagr) (tested and latest version built with 1.6.0)

## Installation
Install dependencies (`ng-packagr` included), via npm:
```shell
npm install
```
or with yarn:
```shell
yarn
```

## Publish

1) Make sure unit test are running and there are no errors.
```shell
npm run test
```
2) Update version number in `package.json`, use semver versioning. Tag git with new version.
3) Build package with `ng-package` with npm:
```shell
npm run build:lib
```
or with yarn:
```shell
yarn build:lib
```
This will generate all the necessary built files in the `/dist/lib/` folder for publishing.
4) Move into the `/dist/lib/` folder, and run pack with npm.
```shell
npm pack
```
This will create a file called `ngx-height-toggle-<version-number>.tgz` in said folder.
5) Publish with npm.
```shell
npm publish
```
