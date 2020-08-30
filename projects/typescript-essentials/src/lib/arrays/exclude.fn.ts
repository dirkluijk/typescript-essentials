/**
 * Returns a copy of a source array, with certain values excluded.
 *
 * @param source The source array.
 * @param valuesToExclude The values to exclude from the source array.
 * @param equals Optional comparator function.
 */
export function exclude<T>(source: T[], valuesToExclude: (T)[], equals: (a: T, b: T) => boolean = (a, b) => a === b): T[] {
    return source.filter((a) => valuesToExclude.every((b) => !equals(a, b)));
}
