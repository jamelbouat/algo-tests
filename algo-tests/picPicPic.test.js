const picPicPic = require('./picPicPic');

test('test pic pic pic', () => {
    const E1 = [[1, 2, 3],
               [4, 5, 6],
               [7, 0, 9]];

    const E2 = [[0, 0, 0, 0],
               [0, 1, 0, 0],
               [0, 0, 1, 0],
               [0, 0, 0, 1]];

    const E3 = [[1, 8, 7],
                [4, 5, 6],
                [7, 0, 9]];

    const E4 = [[1, 8, 7],
                [4, 11, 1],
                [4, 3, 6],
                [0, 0, 6],
                [7, 0, 9]];

    const E5 = [[0, 10, 10, 10, 5, 8],
                [0, 11, 10, 10, 1, 3],
                [0, 10, 17, 10, 9, 7],
                [90, 0, 0, 1, 79, 10]];

    const E6 = [[0], [0]];

    expect(picPicPic(E1)).toBe(25);
    expect(picPicPic(E2)).toBe(3);
    expect(picPicPic(E3)).toBe(31);
    expect(picPicPic(E4)).toBe(44);
    expect(picPicPic(E5)).toBe(180);
    expect(picPicPic(E6)).toBe(0);
})
