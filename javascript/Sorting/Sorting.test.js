const assert = require('assert');
const InsertionSort = require('./Insrtion/Insertion');
const mergeSort = require('./MargeSort/MargSort'); 

describe('InsertionSort', () => {
  it('should sort an array of integers using insertion sort', () => {
    const inputArray = [5, 2, 9, 1, 5, 6];
    const sortedArray = InsertionSort(inputArray);
    assert.deepStrictEqual(sortedArray, [1, 2, 5, 5, 6, 9]);
  });

  it('should handle an already sorted array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const sortedArray = InsertionSort(inputArray);
    assert.deepStrictEqual(sortedArray, [1, 2, 3, 4, 5]);
  });

  it('should handle an array in descending order', () => {
    const inputArray = [5, 4, 3, 2, 1];
    const sortedArray = InsertionSort(inputArray);
    assert.deepStrictEqual(sortedArray, [1, 2, 3, 4, 5]);
  });


test('Empty array should stay empty', () => {
  expect(mergeSort([])).toEqual([]);
});

test('Array with one element should remain the same', () => {
  expect(mergeSort([42])).toEqual([42]);
});

test('Array should be sorted correctly', () => {
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = [3, 9, 10, 27, 38, 43, 82];

  expect(mergeSort(unsortedArray)).toEqual(sortedArray);
});
});