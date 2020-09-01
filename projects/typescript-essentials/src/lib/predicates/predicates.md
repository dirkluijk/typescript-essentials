# Predicates & type guards

## `Predicate<T>`

A `Predicate<T>` is a function that accepts `T` and returns a boolean.

```typescript
const isLazy: Predicate<Cat> = (cat: Cat) => cat.lazy === true;
```

## `TypeGuard<T, R>`

A `TypeGuard<T, R extends T>` is a special predicate function that should be a type-guard.

A type-guard informs the compiler that, if true, the passed object `T` is in fact of sub-type `R`.

```typescript
const isCat: TypeGuard<Animal, Cat> = (a: Animal): a is Cat => a.type === 'cat';
```
 

## `not()`

This function allows you to invert a predicate. When the predicate is `true`, it will result into `false`.

It also accepts type-guards:

```typescript
type Animal = Cat | Dog;

const animals: Animal[] = [/* .. */];

animals
    .filter(not(isCat))
    .forEach(dog => dog.bark());
```

## `matchesDiscriminator(key, value)`

This function returns a predicate which returns true if passed objects `key` is equal to the passed `value`.

It actually narrows down union types for you!

```typescript
type Animal = Cat | Dog;

const animals: Animal[] = [/* .. */];

animals
    .filter(matchesDiscriminator('type', 'cat'))
    .forEach(cat => cat.meow()); // type-safe!

animals
    .filter(not(matchesDiscriminator('type', 'cat')))
    .forEach(dog => dog.bark()); // type-safe!
```

## Type-guards

Other useful type-guards are:

* `isNotNull()`: allows you to filter out `null` values
* `isNotUndefined()`: allows you to filter out `undefined` values
* `isNotNullOrUndefined()`: allows you to filter out `null` and `undefined` values

Their inverted counterparts are also included:

* `isNull()`
* `isUndefined()`
* `isNullOrUndefined()`

```typescript
const animals: Array<Animal | null> = [/* .. */];

animals
    .filter(isNotNull)
    .forEach(animal => animal.type); // null-safe!

```

