const assert = require('assert');
const InsertionSort = require('./Insrtion/Insertion');

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
});