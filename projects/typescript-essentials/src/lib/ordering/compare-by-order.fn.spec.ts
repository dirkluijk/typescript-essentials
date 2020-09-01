import { Ordered, compareByOrder } from 'typescript-essentials-api';

interface Foo { name: string; }

describe('Compare by order fn', () => {
    it('should sort', () => {

        const orderedItems: Ordered<Foo>[] = [
            {
                name: 'A',
                order: 4
            },
            {
                name: 'B',
                order: 2
            },
            {
                name: 'C',
                order: 1
            },
            {
                name: 'D',
                order: 3
            }
        ];

        const sortedItems = orderedItems.sort(compareByOrder);

        expect(sortedItems.map((it) => it.name)).toEqual(['C', 'B', 'D', 'A']);
    });
});
