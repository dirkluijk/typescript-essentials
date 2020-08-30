/**
 * Divides a source array based on a predicate.
 *
 * @param source The source array.
 * @param predicate The predicate to partition on.
 */
import { Predicate } from '../predicates/predicate';

export function partition<T>(source: T[], predicate: Predicate<T>): [T[], T[]] {
    const a: T[] = [];
    const b: T[] = [];

    source.forEach((item) => (predicate(item) ? a : b).push(item));

    return [a, b];
}
