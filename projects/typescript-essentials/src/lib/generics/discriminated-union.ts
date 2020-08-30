/**
 * A generic type to narrow a union type using a specific discriminator type.
 */
export type DiscriminatedUnion<T, K extends keyof T, V extends T[K]> = T extends Record<K, V> ? T : V extends T[K] ? T : never;
