/**
 * Negates a given predicate.
 *
 * @param func The predicate to negate.
 */
import { Subtract } from '../generics/subtract';

import { Predicate } from './predicate';
import { TypeGuard } from './type-guard';

export function not<T, R extends T>(func: TypeGuard<T, R>): unknown extends T ?
    TypeGuard<any, Subtract<any, R>> :
    TypeGuard<T, Subtract<T, R>>;
export function not<T>(func: Predicate<T>): Predicate<T>;
export function not<T>(func: Predicate<T>): Predicate<T> {
    return function(this: unknown, arg: T, ...otherArgs: any[]): boolean {
        return !func.apply(this, [arg, ...otherArgs]);
    };
}
