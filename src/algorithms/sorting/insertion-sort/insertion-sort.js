"use strict";
/**
 * A function to sort the given array. O(n^2)
 * @param array The list of numbers to be sorted
 */
Object.defineProperty(exports, "__esModule", { value: true });
function insertionSort(array) {
    let len = array.length;
    for (let j = 1; j < len; j++) {
        let key = array[j];
        // Insert array[j] into the sorted sequence array[1...j-1]
        let i = j - 1;
        while (i > 0 && array[i] > key) {
            array[i + 1] = array[i];
            i--;
        }
        array[i] = key;
    }
}
exports.default = insertionSort;
