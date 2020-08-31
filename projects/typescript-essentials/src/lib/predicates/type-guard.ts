/**
 * Type-guard that returns whether a given type T is R.
 */
import { Predicate } from './predicate';

export type TypeGuard<T, R extends T> = Predicate<T> & ((value: T) => value is R);
