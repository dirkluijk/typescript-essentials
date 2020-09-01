# Utility functions for Angular

A set of useful "track by" functions. Most well-known use-case is Angulars `*ngFor` structural directives.

## `trackByIndex()`

Useful when the identity of a view is determined by its index. 

```typescript
import { trackByIndex } from 'typescript-essentials';

class MyComponent {
    public items: any[] = [ /* ... */ ];
    public trackByIndex = trackByIndex;
}
```

```html
<div *ngFor="let item of items; trackByFn: trackByIndex">
    <!-- ... -->
</div>
```

## `trackById()`

Useful when the identity of a view is determined by its `id` property. 

```typescript
import { trackById } from 'typescript-essentials';

class MyComponent {
    public items: { id: any, /* ... */ }[] = [ /* ... */ ];
    public trackById = trackById;
}
```

```html
<div *ngFor="let item of items; trackByFn: trackById">
    <!-- ... -->
</div>
```

## `trackByValue()`

Useful when the identity of a view is determined by its object reference. This is the default "track by" function for Angulars `*ngFor` directive.

```typescript
import { trackByValue } from 'typescript-essentials';

class MyComponent {
    public items: any[] = [ /* ... */ ];
    public trackByValue = trackByValue;
}
```

```html
<div *ngFor="let item of items; trackByFn: trackByValue">
    <!-- ... -->
</div>
```

## `createTrackByFn()`

Useful when the identity of a view is determined by a specific property. This is a factory function.

```typescript
import { createTrackByFn } from 'typescript-essentials';

interface Item {
    foo: string;
}

class MyComponent {
    public items: Item[] = [ /* ... */ ];

    public trackByFoo = createTrackByFn('foo');
}
```

```html
<div *ngFor="let item of items; trackByFn: trackByFoo">
    <!-- ... -->
</div>
```
