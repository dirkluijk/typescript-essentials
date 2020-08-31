# Typescript Essentials

> Must-have utility types and functions for TypeScript

[![NPM version](http://img.shields.io/npm/v/typescript-essentials.svg?style=flat-square)](https://www.npmjs.com/package/typescript-essentials)
[![NPM downloads](http://img.shields.io/npm/dm/typescript-essentials.svg?style=flat-square)](https://www.npmjs.com/package/typescript-essentials)
[![Build status](https://img.shields.io/travis/dirkluijk/typescript-essentials.svg?style=flat-square)](https://travis-ci.org/dirkluijk/typescript-essentials)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

## Overview

This is a small util library which contains several types and functions that may
be useful in your TypeScript project. 

## Getting started 🌩

##### npm

```
npm install typescript-essentials
```

##### yarn

```
yarn add typescript-essentials
```

## Contents

### Predicates & type guards

Useful to compose simple predicates, or to narrow types in arrays or other data structures.

* `Predicate` and `TypeGuard` interfaces
* `not()` function to negate predicates
* `isNull()` type guard
* `isUndefined()` type guard
* `isNullOrUndefined()` type guard
* `isNotNull()` type guard
* `isNotUndefined()` type guard
* `isNotNullOrUndefined()` type guard
* `matchesDiscriminator()` function that returns a type guard

### Ordered

* `Ordered<T>` interface
* `compareByOrder()` comparator function

### Generics

* `DiscriminatedUnion` to narrow a union type using a discriminator field
* `WithPartial` to make certain properties optional
* `Narrowable` to identify a type that can be narrowed

### Array utils

* `uniqueValues()`
* `exclude()`
* `partition()`

### Object utils

* `omit` function (to omit specific properties from objects)

### Angular utils

* `trackByIndex`, `trackById` and `createTrackByFn` functions

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/dirkluijk"><img src="https://avatars2.githubusercontent.com/u/2102973?v=4" width="100px;" alt="Dirk Luijk"/><br /><sub><b>Dirk Luijk</b></sub></a><br /><a href="https://github.com/dirkluijk/typescript-essentials/commits?author=dirkluijk" title="Code">💻</a> <a href="https://github.com/dirkluijk/typescript-essentials/commits?author=dirkluijk" title="Documentation">📖</a></td>
    <td align="center"><a href="https://craftsmen.nl/"><img src="https://avatars0.githubusercontent.com/u/16564855?v=4" width="100px;" alt="Daan Scheerens"/><br /><sub><b>Daan Scheerens</b></sub></a><br /><a href="#ideas-dscheerens" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
