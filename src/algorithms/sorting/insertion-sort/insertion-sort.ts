/**
 * A function to sort the given array. O(n^2)
 * @param array The list of numbers to be sorted
 */

export default function insertionSort(array: number[]): void {
    let len: number = array.length;
    for(let j: number = 1; j < len; j++) {
        let key: number = array[j];
        // Insert array[j] into the sorted sequence array[1...j-1]
        let i: number = j-1;
        while(i > 0 && array[i] > key) {
            array[i+1] = array[i];
            i--;
        }
        array[i] = key;
    }
}