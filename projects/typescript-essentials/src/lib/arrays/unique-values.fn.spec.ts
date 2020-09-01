import { uniqueValues } from 'typescript-essentials-api';

describe('unique-values fn', () => {
    it('should return unique values', () => {
        const source = ['foo', 'foo', 'bar', 'baz', 'foo', 'baz'];

        expect(uniqueValues(source))
            .toEqual(['foo', 'bar', 'baz']);
    });

    it('should return unique values based on reference', () => {
        const foo = {};
        const bar = {};
        const baz = {};

        const source = [foo, foo, bar, baz, foo, baz];

        expect(uniqueValues(source))
            .toEqual([foo, bar, baz]);
    });

    it('should return unique values based on discriminator', () => {
        const source = ['1-A', '2-A', '1-B', '3-A', '3-A', '1-B'];

        expect(uniqueValues(source, (it) => it.substr(0, 1)))
            .toEqual(['1-A', '2-A', '3-A']);
    });
});
