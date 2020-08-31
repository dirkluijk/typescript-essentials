import { Narrowable } from '../generics/narrowable';
import { DiscriminatedUnion } from '../generics/discriminated-union';

import { TypeGuard } from './type-guard';

type DiscriminatorPredicate<T, K extends keyof T, V extends T[K]> = TypeGuard<T, DiscriminatedUnion<T, K, V>>;

export function matchesDiscriminator<T, K extends keyof T, V extends T[K] & Narrowable>(
    discriminator: K,
    ...values: V[]
): DiscriminatorPredicate<T, K, V> {
    return (something: T): something is DiscriminatedUnion<T, K, V> => (values as T[K][]).includes(something[discriminator]);
}
