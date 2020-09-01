# Objects

## `omit()`

Omits specific properties from a source object.

```typescript
import { omit } from 'typescript-essentials';

const source = {
    foo: '1',
    bar: '2',
    baz: '3'
};

const result = omit(source, 'foo', 'bar'); // { baz: '3' }
```
