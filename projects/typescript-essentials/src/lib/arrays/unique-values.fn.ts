/**
 * Returns the unique values from a source array.
 *
 * @param source The source array.
 * @param discriminator An optional discriminator function to check against.
 */
export function uniqueValues<T>(source: T[], discriminator?: (value: T) => unknown): T[] {
    if (!discriminator) {
        return Array.from(new Set<T>(source));
    }

    const addedValues = new Set<unknown>();
    const result: T[] = [];

    for (const value of source) {
        const discriminatorValue = discriminator(value);

        if (!addedValues.has(discriminatorValue)) {
            result.push(value);
            addedValues.add(discriminatorValue);
        }
    }

    return result;
}
