const maxZerosSequenceNumber = require('./maxZerosSequenceNumber');

test('test des 1 et des 0', () => {
    const M1 = 123456; // 11110001001000000
    const M2 = 65535; // 1111111111111111
    const M3 = 9875461; // 100101101011000000000101
    const M4 = 256;
    const M5 = 512598748; //11110100011011010001011011100

    expect(maxZerosSequenceNumber(M1)).toBe(6);
    expect(maxZerosSequenceNumber(M2)).toBe(0);
    expect(maxZerosSequenceNumber(M3)).toBe(9);
    expect(maxZerosSequenceNumber(M4)).toBe(8);
    expect(maxZerosSequenceNumber(M5)).toBe(3);
})
