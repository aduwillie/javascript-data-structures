const swap = (arr, positionA, positionB) => {
    const temp = arr[positionA];
    arr[positionA] = arr[positionB];
    arr[positionB] = temp;
};

module.exports = swap;
