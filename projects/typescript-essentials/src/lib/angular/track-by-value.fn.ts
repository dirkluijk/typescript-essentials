/**
 * TrackBy function for Angular, which tracks by the values identity.
 */
export function trackByValue<T>(_: number, value: T): T {
    return value;
}
