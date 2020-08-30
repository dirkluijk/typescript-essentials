/**
 * TrackBy function for Angular, which tracks by the entities "id" key.
 */
export function trackById<T>(_: number, entity: { id: T }): T {
    return entity.id;
}
