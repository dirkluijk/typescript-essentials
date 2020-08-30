/**
 * Omits specific properties from objects
 */
// tslint:disable:max-line-length
export function omit<T extends object, K extends keyof T>(value: T, key: K): Omit<T, K>;
export function omit<T extends object, K1 extends keyof T, K2 extends keyof T>(value: T, k1: K1, k2: K2): Omit<Omit<T, K1>, K2>;
export function omit<T extends object, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T>(value: T, k1: K1, k2: K2, k3: K3): Omit<Omit<Omit<T, K1>, K2>, K3>;
export function omit<T extends object, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T>(value: T, k1: K1, k2: K2, k3: K3, k4: K4): Omit<Omit<Omit<Omit<T, K1>, K2>, K3>, K4>;
export function omit<T extends object, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T>(value: T, k1: K1, k2: K2, k3: K3, k4: K4, k5: K5): Omit<Omit<Omit<Omit<Omit<T, K1>, K2>, K3>, K4>, K5>;
// tslint:enable:max-line-length
export function omit<T extends object>(source: T, ...keys: (keyof T)[]): Partial<T> {
    return (Object.entries(source) as [keyof T, any][]).reduce<Partial<T>>(
        (result, [key, value]) => {
            if (!keys.includes(key)) {
                result[key] = value;
            }

            return result;
        },
        {}
    );
}
