
const rendsArgent = (L, M) => {
    let P = 0;
    let amount = 0;

    L.forEach(number => {
        while (amount + number <= M) {
            amount += number
            P++;
        }
    })
    return amount === M ? P : -1;
}

module.exports = rendsArgent;
