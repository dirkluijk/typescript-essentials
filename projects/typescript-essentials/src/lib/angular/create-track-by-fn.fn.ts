import { TrackByFunction } from './track-by-function';

interface AnyObject { [key: string]: any; }

/**
 * Creates a trackBy function, based on a property key.
 */
export function createTrackByFn<T, K extends keyof T = keyof T>(property: K): TrackByFunction<T, T[K]>;
export function createTrackByFn<K extends string, T extends { [X in K]: any; } & AnyObject>(property: K): TrackByFunction<T, T[K]>;
export function createTrackByFn(property: any): TrackByFunction<any, any> {
    return (_: number, value: any) => value[property];
}
