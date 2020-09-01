# Arrays

A set of low-level array functions.

## `exclude()`

Returns a copy of a source array, with certain values excluded. 

```typescript
import { exclude } from 'typescript-essentials';

const source = ['foo', 'bar', 'baz', 'qux'];
const excludedItems = ['foo', 'baz'];

exclude(source, excludedItems); // ['bar', 'qux']
```

## `partition()`

Divides a source array based on a predicate. 

```typescript
import { partition } from 'typescript-essentials';

const source = ['foo', 'bar', 'baz', 'qux'];

partition(source, it => it.startsWith('b')); // ['bar', 'baz']
```

## `uniqueValues()`

Returns the unique values from a source array, optionally using a discriminator function. 

```typescript
import { uniqueValues } from 'typescript-essentials';

const source = ['foo', 'foo', 'bar', 'foo'];

uniqueValues(source); // ['foo', 'bar']

const source2 = [
    { id: 1, name: 'Foo'},
    { id: 2, name: 'Bar'},
    { id: 1, name: 'Foo'}
];

uniqueValues(source, it => it.id); // [{ id: 1, name: 'Foo'}, { id: 2, name: 'Bar'}]
```

