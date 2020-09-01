# Generics

Contains a set of generic types for TypeScript.

## `DiscriminatedUnion`

Let's say you have a union type, for example:

```typescript
type Animal = Dog | Cat;

interface Dog {
    type: 'dog';
    bark(): void;
}

interface Cat {
    type: 'cat';
    meow(): void;
}
```

You might want to indicate that a given function returns a specific subtype, based on the shared discriminator field `type`.

```typescript
function getAnimalByType(type: string): Animal {
    /* ... */
}

const cat = getAnimalByType('cat');

cat.meow() // error: property 'meow' does not exist on type 'Animal'
```

For this simple example, you can easily make things smarter using overloads:

```typescript
function getAnimalByType(type: 'dog'): Dog;
function getAnimalByType(type: 'cat'): Cat;
function getAnimalByType(type: string): Animal {
    /* ... */
    return { }
}

const cat = getAnimalByType('cat');

cat.meow(); // works!
```

However, when your union consists of a lot of types, `DiscriminatedUnion` allows you to do it without overloading:

```typescript
function getAnimalByType<V extends Animal['type']>(type: V): DiscriminatedUnion<Animal, 'type', V> {
    /* ... */
    return { }
}

const cat = getAnimalByType('cat');

cat.meow(); // works!
```

## `Narrowable`

When working with generics, you sometimes need to narrow your types to be as specific as possible.

For example:
```typescript
function someFunction<T>(...values: T[]): T[] {
    /* .. */
}

// gives: `string[]`
// wanted: `("foo" | "bar")[]`
const x = someFunction('foo', 'bar');
``` 

Instead of `("foo" | "bar")[]`, the function will return `string[]`.

This can be easily fixed with the `Narrowable` type:

```typescript
function someFunction<T extends Narrowable>(...values: T[]): T[] {
    /* .. */
}
```

## `Subtract`

If you want to specify that something *is not* a specific type, you can subtract it.
This can be useful for inverted type-guards.

```typescript
type Animal = Dog | Cat;

// regular type-guard
function isCat(animal: Animal): animal is Cat {
    return animal.type === 'cat';
}

// inverted type-guard
function isNotCat(animal: Animal): animal is Subtract<Animal, Cat> {
    return animal.type !== 'cat';
}

if (isNotCat(animal)) {
    animal.bark(); // inferred to Dog
}
```

> Note: this might be a silly example, as `!isCat(animal)` achieves the same result.
> You can find a better example at [`not()` and `matchesDiscriminator()` examples](../predicates/predicates.md).

## `WithOptional`

From T, make all properties whose keys are in the union K optional.

```typescript
interface Foo {
    key1: string;
    key2: string;
    key3: string;
}

type X = WithOptional<Foo, 'key2' | 'key3'>;

// results into:
// { key1: string; key2?: string; key3?: string; }
```
