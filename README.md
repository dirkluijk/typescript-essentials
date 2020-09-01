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

### Predicates & type-guards

Useful to compose simple predicates, or to narrow types in arrays or other data structures.

* [`Predicate` and `TypeGuard` interfaces](projects/typescript-essentials/src/lib/predicates/predicates.md)
* [`not()` function](projects/typescript-essentials/src/lib/predicates/predicates.md) to negate predicates
* [`matchesDiscriminator()` function](projects/typescript-essentials/src/lib/predicates/predicates.md) that returns a type guard
* [`isNull()` type guard](projects/typescript-essentials/src/lib/predicates/predicates.md)
* [`isUndefined()` type guard](projects/typescript-essentials/src/lib/predicates/predicates.md)
* [`isNullOrUndefined()` type guard](projects/typescript-essentials/src/lib/predicates/predicates.md)
* [`isNotNull()` type guard](projects/typescript-essentials/src/lib/predicates/predicates.md)
* [`isNotUndefined()` type guard](projects/typescript-essentials/src/lib/predicates/predicates.md)
* [`isNotNullOrUndefined()` type guard](projects/typescript-essentials/src/lib/predicates/predicates.md)

### Generics

* [`DiscriminatedUnion`](projects/typescript-essentials/src/lib/generics/generics.md) to narrow a union type using a discriminator field
* [`Narrowable`](projects/typescript-essentials/src/lib/generics/generics.md) to identify a type that can be narrowed
* [`Subtract`](projects/typescript-essentials/src/lib/generics/generics.md) to subtract types from one another
* [`WithOptional`](projects/typescript-essentials/src/lib/generics/generics.md) to make certain properties optional

### Array utils

* [`uniqueValues()`](projects/typescript-essentials/src/lib/arrays/arrays.md)
* [`exclude()`](projects/typescript-essentials/src/lib/arrays/arrays.md)
* [`partition()`](projects/typescript-essentials/src/lib/arrays/arrays.md)

### Object utils

* [`omit()`](projects/typescript-essentials/src/lib/objects/objects.md)

### Ordered

* [`Ordered<T>` interface](projects/typescript-essentials/src/lib/ordering/ordering.md)
* [`compareByOrder()` comparator function](projects/typescript-essentials/src/lib/ordering/ordering.md)

### "Track by" functions for Angular 

* [`trackByIndex`](projects/typescript-essentials/src/lib/angular/angular.md)
* [`trackById`](projects/typescript-essentials/src/lib/angular/angular.md)
* [`trackByValue`](projects/typescript-essentials/src/lib/angular/angular.md)
* [`createTrackByFn`](projects/typescript-essentials/src/lib/angular/angular.md)

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
