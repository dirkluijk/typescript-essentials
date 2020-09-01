import { omit } from 'typescript-essentials-api';

describe('omit function', () => {
    it('creates shallow clone of the given object without the specified properties', () => {
        expect(omit({a: 1, b: true, c: 'hi'}, 'b')).toEqual({a: 1, c: 'hi'});
        expect(omit({a: 123, b: true, c: 'hi', d: [1, 2, 3], e: {f: [4]}}, 'b', 'c', 'd')).toEqual({a: 123, e: {f: [4]}});
    });
});
