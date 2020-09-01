import { exclude } from 'typescript-essentials-api';

describe('exclude fn', () => {
    it('should exclude', () => {
        const source = ['foo', 'bar', 'baz'];

        expect(exclude(source, ['foo'])).toEqual(['bar', 'baz']);
    });

    it('should exclude duplicates', () => {
        const source = ['foo', 'bar', 'baz', 'foo', 'bar', 'foo'];

        expect(exclude(source, ['foo'])).toEqual(['bar', 'baz', 'bar']);
    });

    it('should exclude mixed', () => {
        const source = ['foo', 1, 2, 'foo', 2, 'foo'];

        expect(exclude(source, [2])).toEqual(['foo', 1, 'foo', 'foo']);
    });
});
