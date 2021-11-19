const rendsArgent = require('./rendsArgent');

test('test rends argent', () => {
    const T1 = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    const T2 = [500, 200, 100, 50, 20, 10, 5];
    const M1 = 626.5;
    const M2 = 1626.5;
    const M3 = 2626.51;
    const M4 = 1475.00;

    expect(rendsArgent(T1, M1)).toBe(6);
    expect(rendsArgent(T1, M3)).toBe(11);
    expect(rendsArgent(T1, M2)).toBe(8);
    expect(rendsArgent(T2, M1)).toBe(-1);
    expect(rendsArgent(T2, M2)).toBe(-1);
    expect(rendsArgent(T2, M4)).toBe(7);
})
