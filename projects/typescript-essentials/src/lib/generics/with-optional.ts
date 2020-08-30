/**
 * From T, make all properties whose keys are in the union K optional
 */
export type WithOptional<T, K extends keyof any> = Omit<T, K> & Partial<Exclude<T, K>>;
