import { Predicate } from '../predicates/predicate';

/**
 * Divides a source array based on a predicate.
 *
 * It will return a tuple with the elements that match the predicate,
 * followed by the elements that don't match the predicate.
 *
 * @param source The source array.
 * @param predicate The predicate to partition on.
 */
export function partition<T>(source: T[], predicate: Predicate<T>): [T[], T[]] {
    const a: T[] = [];
    const b: T[] = [];

    source.forEach((item) => (predicate(item) ? a : b).push(item));

    return [a, b];
}
