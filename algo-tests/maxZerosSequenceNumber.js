
// Remainders form the binary representation of an integer
const maxZerosSequenceNumber = (N) => {
    let zerosSequencesList = [];
    let sequenceNumber = 0;
    const remainder = (N) => N % 2;

    const calculateZerosSequence = (bit) => {
        if (bit === 0) {
            sequenceNumber++;
        } else {
            sequenceNumber && zerosSequencesList.push(sequenceNumber);
            sequenceNumber = 0;
        }
    }

    while ((N - remainder(N) / 2) > 0) {
        calculateZerosSequence(remainder(N))
        N = (N - remainder(N)) / 2;
    }

    calculateZerosSequence(remainder(N));
    return zerosSequencesList.length === 0 ? 0 : Math.max(...zerosSequencesList);
}

module.exports = maxZerosSequenceNumber;
