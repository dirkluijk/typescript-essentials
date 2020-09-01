import { trackById } from 'typescript-essentials-api';

describe('track by id', () => {
    it('should track by id', () => {
        expect(trackById(1, {id: 'Foo'})).toBe('Foo');
        expect(trackById(1, {id: 1})).toBe(1);

        // @ts-expect-error
        trackById(1, {foo: 'bar'});
    });
});
