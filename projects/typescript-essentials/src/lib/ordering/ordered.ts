/**
 * Allows T to be ordered using a "order" property.
 */
export type Ordered<T> = T & { order: number };
