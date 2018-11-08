const randomPosition = (length) => {
    return Math.floor(Math.random() * length);
};

const quickSort = (arr) => {
    if (Array.isArray(arr)) {
        if (arr.length < 2) {
            return arr;
        }
        const leftSide = [];
        const rightSide = [];
        const pivot = arr.splice(randomPosition(arr.length), 1)[0];
        const length = arr.length;

        for (let i = 0; i < length; i++) {
            if (arr[i] <= pivot) {
                leftSide.push(arr[i]);
            } else {
                rightSide.push(arr[i]);
            }
        }

        return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
    }
    throw new Error('Argument should be an array');
};

module.exports = quickSort;
