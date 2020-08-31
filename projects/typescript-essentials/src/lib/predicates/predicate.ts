/**
 * Predicate for a given type T.
 */
export type Predicate<T> = (value: T, ...args: any[]) => boolean;
