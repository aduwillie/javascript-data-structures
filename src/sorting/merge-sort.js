const merge = (leftArray, rightArray) => {
    if (Array.isArray(leftArray) && Array.isArray(rightArray)) {
        let sortedArray = [];
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
        // handle remaining items on either side
        while (leftArray.length) {
            sortedArray.push(leftArray.shift());
        }
        while(rightArray.length) {
            sortedArray.push(rightArray.shift());
        }
        return sortedArray;
    }
    throw new Error('Both leftArray and rightArray arguments should be arrays!');
};

const mergeSort = (arr) => {
    if (Array.isArray(arr)) {
        if (arr.length < 2) {
            const middleIndex = Math.floor(arr.length / 2);
            const leftArray = arr.slice(0, middleIndex);
            const rightArray = arr.slice(middleIndex, arr.length);
            return merge(mergeSort(leftArray), mergeSort(rightArray));
        }
        return arr;
    }
    throw new Error('Argument should be an array!');
};

module.exports = mergeSort;
