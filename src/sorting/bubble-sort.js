const swap = require('./swap');

const bubbleSort = (arr) => {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let isSorted = false;
            let lastUnsorted = arr.length - 1
            while(!isSorted) {
                isSorted = true;
                for (let i = 0; i < lastUnsorted; i++) {
                    if (arr[i] > arr[i + 1]) {
                        swap(arr, i, i + 1);
                        isSorted = false;
                    }
                }
                lastUnsorted--;
            }
            return arr;
        }
        return arr;
    }
    throw new Error('Argument should be an array!');
};

module.exports = bubbleSort;
