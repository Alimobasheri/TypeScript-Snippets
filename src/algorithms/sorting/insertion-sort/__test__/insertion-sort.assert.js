import insertionSort from '../insertion-sort'

const unsortedArray = [31, 25, 21, 24, 28, 30]
const sortedArray = [21, 24, 25, 28, 30, 31]

describe("Sort Array", () => {
    it(`Should sort ${unsortedArray} into : ${sortedArray}`, () => {
        expect(insertionSort(unsortedArray)).toEqual(sortedArray)
    })
})