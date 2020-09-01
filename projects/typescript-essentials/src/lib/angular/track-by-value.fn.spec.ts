import { trackByValue } from 'typescript-essentials-api';

describe('track by value', () => {
    it('should track by value', () => {
        const object1 = {id: 'Foo'};
        const object2 = {id: 2};

        expect(trackByValue(0, object1)).toBe(object1);
        expect(trackByValue(1, object2)).toBe(object2);
    });
});
