import { partition } from 'typescript-essentials-api';

describe('partition fn', () => {
    it('should partition', () => {
        const source = ['foo', 'bar', 'baz'];

        expect(partition(source, (it) => it.startsWith('b')))
            .toEqual([['bar', 'baz'], ['foo']]);
    });

    it('should partition mixed', () => {
        const source = ['foo', 1, 2, 'foo', 2, 'foo'];

        expect(partition(source, (it) => it === 2))
            .toEqual([[2, 2], ['foo', 1, 'foo', 'foo']]);
    });
});
