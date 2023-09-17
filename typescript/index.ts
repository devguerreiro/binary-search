const assert = require("assert");

function binarySearch(array: number[], n: number) {
    let startIndex = 0;
    while (true) {
        let arrayLength = array.length;
        let splitIndex = Math.floor(arrayLength / 2);
        let value = array[splitIndex];
        if (value === undefined) {
            return -1;
        } else if (value === n) {
            return startIndex === 0
                ? splitIndex
                : startIndex + (arrayLength - 1) - splitIndex;
        } else if (value > n) {
            // go to the left
            array = array.slice(0, splitIndex);
        } else if (value < n) {
            // go to the right
            array = array.slice(splitIndex + 1);
            startIndex += splitIndex + 1;
        }
    }
}

const array = [...Array(16).keys()];

for (let i of array) {
    assert.equal(binarySearch(array, i), i);
}
assert.equal(binarySearch(array, -2), -1);
assert.equal(binarySearch(array, 16), -1);
