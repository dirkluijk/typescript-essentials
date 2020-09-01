import { createTrackByFn, TrackByFunction } from 'typescript-essentials-api';

interface Foo {
    bar: string;
}

describe('create track by fn', () => {
    it('should create a track by fn', () => {
        const trackByBar = createTrackByFn<Foo>('bar');
        const trackByBar2 = createTrackByFn('bar');

        expect(trackByBar(1, {bar: 'Test'})).toBe('Test');
        expect(trackByBar2(1, {bar: 'Test2'})).toBe('Test2');
    });

    it('should have correct types', () => {
        const trackByBar = createTrackByFn('bar');

        // @ts-expect-error
        trackByBar(1, {barz: 'Test2'});

        // @ts-expect-error
        // noinspection JSUnusedLocalSymbols
        const trackByBar2: TrackByFunction<Foo> = createTrackByFn('lorem');
    });
});
