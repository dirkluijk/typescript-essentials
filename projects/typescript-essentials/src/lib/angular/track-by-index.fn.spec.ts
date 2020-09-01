import { trackByIndex } from 'typescript-essentials-api';

describe('track by index', () => {
    it('should track by index', () => {
        expect(trackByIndex(0, {id: 'Foo'})).toBe(0);
        expect(trackByIndex(1, {id: 2})).toBe(1);
    });
});
