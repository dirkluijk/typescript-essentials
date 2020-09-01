import { matchesDiscriminator, not } from 'typescript-essentials-api';

type Animal = Dog | Cat | Bird;

interface Dog {
    type: AnimalType.DOG;
    type2: 'dog';
    bark(): void;
}

interface Cat {
    type: AnimalType.CAT;
    type2: 'cat';
    walk(): void;
    meow(): void;
}

interface Bird {
    type: AnimalType.BIRD;
    type2: 'bird';
    walk(): void;
    fly(): void;
}

enum AnimalType {
    DOG,
    CAT,
    BIRD
}

// tslint:disable:no-unused-expression

describe('Matches discriminator', () => {
    it('should match on discriminator values', () => {
        const animals: Animal[] = [{ type: AnimalType.DOG, type2: 'dog', bark: () => {} }];

        animals
            .filter(matchesDiscriminator('type', AnimalType.CAT))
            .forEach((cat) => {
                () => cat.meow();

                // @ts-expect-error
                () => cat.bark();
            });

        animals
            .filter(matchesDiscriminator('type', AnimalType.CAT, AnimalType.BIRD))
            .forEach((catOrBird) => {
                () => catOrBird.walk();

                // @ts-expect-error
                () => catOrBird.meow();

                // @ts-expect-error
                () => catOrBird.bark();
            });

        animals
            .filter(matchesDiscriminator('type2', 'cat', 'bird'))
            .forEach((catOrBird) => {
                () => catOrBird.walk();

                // @ts-expect-error
                () => catOrBird.meow();

                // @ts-expect-error
                () => catOrBird.bark();
            });

        // negating
        animals
            .filter(not(matchesDiscriminator('type2', 'cat', 'bird')))
            .forEach((dog) => {
                // @ts-expect-error
                () => dog.walk();

                // @ts-expect-error
                () => dog.meow();

                () => dog.bark();
            });

        // negating
        animals
            .filter(not(matchesDiscriminator('type2', 'dog')))
            .forEach((catOrBird) => {
                () => catOrBird.walk();

                // @ts-expect-error
                () => catOrBird.meow();

                // @ts-expect-error
                () => catOrBird.bark();
            });

        // negating and chaining
        animals
            .filter(not(matchesDiscriminator('type2', 'cat')))
            .filter(not(matchesDiscriminator('type2', 'bird')))
            .forEach((dog) => {
                // @ts-expect-error
                () => dog.walk();

                // @ts-expect-error
                () => dog.meow();

                () => dog.bark();
            });
    });
});
