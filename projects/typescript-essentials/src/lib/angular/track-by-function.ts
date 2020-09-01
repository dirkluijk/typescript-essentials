/**
 * TrackBy function for Angular, which takes a T and returns R.
 */
export type TrackByFunction<T, R = unknown> = (index: number, item: T) => R;
