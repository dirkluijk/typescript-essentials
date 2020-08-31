import { not } from './not.fn';
import { isNotNull } from './is-not-null.fn';
import { isNull } from './is-null.fn';
import { TypeGuard } from './type-guard';

// tslint:disable:no-unused-expression

const isCat: TypeGuard<Animal, Cat> = (animal: Animal): animal is Cat => animal.type === 'cat';

type Animal = Dog | Cat;

interface Dog {
    type: 'dog';
    bark(): void;
}

interface Cat {
    type: 'cat';
    meow(): void;
}

describe('Is not null', () => {
    it('should narrow to not null', () => {
        const list = ['foo', 'bar', null];

        list.forEach((str) => {
            // @ts-expect-error
            () => str.length;
        });

        list
            .filter(isNotNull)
            .forEach((str) => {
                () => str.length;
            });

        list
            .filter(not(isNull))
            .forEach((str) => {
                () => str.length;
            });
    });

    it('should narrow using other type guards', () => {
        const animals: Animal[] = [{ type: 'dog', bark: () => {} }];

        animals.forEach((animal) => {
            // @ts-expect-error
            () => animal.bark();
        });

        animals
            .filter(isCat)
            .forEach((cat) => {
                () => cat.meow();

                // @ts-expect-error
                () => cat.bark();
            });

        animals
            .filter(not(isCat))
            .forEach((dog) => {
                () => dog.bark();

                // @ts-expect-error
                () => dog.meow();
            });
    });
});
