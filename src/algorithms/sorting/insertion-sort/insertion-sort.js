"use strict";
/**
 * A function to sort the given array. O(n^2)
 * @param array The list of numbers to be sorted
 */
exports.__esModule = true;
function insertionSort(array) {
    var len = array.length;
    for (var j = 1; j < len; j++) {
        var key = array[j];
        // Insert array[j] into the sorted sequence array[1...j-1]
        var i = j - 1;
        while (i > 0 && array[i] > key) {
            array[i + 1] = array[i];
            i--;
        }
        array[i] = key;
    }
    return array;
}
exports["default"] = insertionSort;
