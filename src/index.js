
exports.min = function min(array) {
    if (!array || array.length < 1) {
        return 0;
    }
    let min;
    for (let i in array) {
        if (!min) {
            min = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

exports.max = function max(array) {
    if (!array || array.length < 1) {
        return 0;
    }
    let max;
    for (let i in array) {
        if (!max) {
            max = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

exports.avg = function avg(array) {
    if (!array || array.length < 1) {
        return 0;
    }
    let avg = 0;
    for (let i in array) {
        avg += array[i];
    }
    return (avg / array.length).toFixed(2);
}
