import { Ordered } from './ordered';

/**
 * Comparator function for Ordered objects.
 */
export function compareByOrder<T>(a: Ordered<T>, b: Ordered<T>): number {
    return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
}
