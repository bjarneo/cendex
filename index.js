module.exports = function cendex(array, value) {
    for (
        var i = 1,
        high = array.length,
        cenInc = high >> 1,
        cenDec = cenInc;
        i < high;
        i++
    ) {
        if (value === array[cenInc]) {
            return cenInc;
        } else if (value === array[cenDec]) {
            return cenDec;
        } else {
            cenDec--;
            cenInc++;
        }
    }

    return -1;
}
