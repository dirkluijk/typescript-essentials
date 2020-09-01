# Ordering

## `Ordered<T>`

Allows T to be ordered using a "order" property.

## `compareByOrder()`

Sorts a list based on the "order" property.

```typescript
import { Ordered, compareByOrder } from 'typescript-essentials-api';

interface Foo { name: string; }

const orderedItems: Ordered<Foo>[] = [
    {
        name: 'A',
        order: 4
    },
    {
        name: 'B',
        order: 2
    },
    {
        name: 'C',
        order: 1
    },
    {
        name: 'D',
        order: 3
    }
];

const sortedItems = orderedItems.sort(compareByOrder);
```
