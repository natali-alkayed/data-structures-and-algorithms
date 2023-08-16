function mergeSort(arr) {
    const n = arr.length;
    if (n <= 1) {
        return arr;
    }
  
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            mergedArray.push(left[i]);
            i++;
        } else {
            mergedArray.push(right[j]);
            j++;
        }
    }
  
    while (i < left.length) {
        mergedArray.push(left[i]);
        i++;
    }
  
    while (j < right.length) {
        mergedArray.push(right[j]);
        j++;
    }
  
    return mergedArray;
  }
  
  const inputArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(inputArray);
  
  console.log("Input Array:", inputArray);
  console.log("Sorted Array:", sortedArray);
  
  
  module.exports = mergeSort;