/**
 * Negates a given predicate.
 *
 * @param func The predicate to negate.
 */
export function not<T extends (...args: any[]) => boolean>(func: T): T {
    return function(this: unknown, ...args: any[]): boolean {
        return !func.apply(this, args);
    } as T;
}
