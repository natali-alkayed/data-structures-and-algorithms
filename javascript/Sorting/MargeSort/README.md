# Mastering Insertion Sort: Uniqueness in Sorting
Merge sort is a popular comparison-based sorting algorithm that follows the divide-and-conquer paradigm to efficiently sort a list or array of elements.

The algorithm works by recursively dividing the input array into smaller subarrays until each subarray contains just one element (which are already sorted by definition). It then merges these sorted subarrays back together in a way that maintains the overall sorted order until the entire array is merged and sorted.

Here's a step-by-step overview of how the merge sort algorithm works:

1. **Divide**: The input array is divided into two roughly equal halves. This step is repeated recursively until each subarray contains only one element.

2. **Conquer**: Once the subarrays are reduced to individual elements, they are considered "sorted" since a single element is inherently sorted.

3. **Merge**: The sorted subarrays are then merged back together. This merging process involves comparing the elements of the subarrays and placing them in the correct order in a new auxiliary array.

4. **Replace Original Array**: Finally, the contents of the auxiliary array are copied back into the original array, resulting in a fully sorted array.

The key insight of merge sort lies in the merging step. By merging two already sorted subarrays, the algorithm can efficiently create a larger sorted subarray. This process is repeated until the entire array is sorted. Merge sort has a time complexity of O(n log n), where 'n' is the number of elements in the array. This time complexity makes merge sort one of the most efficient sorting algorithms, especially for large datasets.

However, merge sort does require additional memory to store the auxiliary array used during the merging step. This is known as its space complexity, which is O(n). Despite this drawback, merge sort is often used in situations where stability and guaranteed worst-case performance are important factors.

## White board
![White Board](https://i.ibb.co/YyvYGgV/image-5.png)

## Understanding the Pseudocode

        
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

    ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

**MergeSort(arr) Algorithm:**

1. `DECLARE n <-- arr.length`: This line declares a variable `n` and assigns it the value of the length of the input array `arr`, which represents the number of elements in the array.

2. `if n > 1`: This condition checks if there are more than one element in the array. If `n` is greater than 1, it means there is work to be done, so the sorting process starts.

3. `DECLARE mid <-- n/2`: This declares a variable `mid` and assigns it the value of half of the length of the array. This value will be used to divide the array into two roughly equal halves.

4. `DECLARE left <-- arr[0...mid]`: This line declares a new array `left` and assigns it the elements from index 0 up to `mid - 1` from the original array `arr`.

5. `DECLARE right <-- arr[mid...n]`: Similarly, this line declares another new array `right` and assigns it the elements from index `mid` to the end of the original array `arr`.

6. `Mergesort(left)`: Recursively calls the `MergeSort` algorithm on the `left` array, effectively breaking it down into smaller subarrays.

7. `Mergesort(right)`: Recursively calls the `MergeSort` algorithm on the `right` array, breaking it down as well.

8. `Merge(left, right, arr)`: After the subarrays are sorted, this line calls the `Merge` algorithm to merge the sorted `left` and `right` subarrays back together into the original array `arr`.

**Merge(left, right, arr) Algorithm:**

1. `DECLARE i <-- 0`, `DECLARE j <-- 0`, `DECLARE k <-- 0`: These lines declare variables `i`, `j`, and `k` to be used as counters while merging.

2. The `while` loop runs as long as `i` is less than the length of `left` and `j` is less than the length of `right`. This means the loop will run until both subarrays have been processed.

3. Inside the loop:
   - It compares the elements at indices `i` in `left` and `j` in `right`. If the element in `left` is less than or equal to the element in `right`, it adds the element from `left` to the `arr` at index `k` and increments `i`.
   - If the element in `left` is greater than the element in `right`, it adds the element from `right` to the `arr` at index `k` and increments `j`.

4. After adding an element to `arr`, `k` is incremented to move to the next position in `arr`.

5. After the loop, it checks if there are any remaining elements in either `left` or `right` subarrays. If `i` has reached the length of `left`, it means there are only remaining elements in `right`. In that case, the remaining elements from `right` are added to `arr`.

6. If there are remaining elements in `left`, they are added to `arr`.


## Implementing Insertion Sort in JavaScript

[insertion.js](./MargSort.js)

![Alt text](https://i.ibb.co/8PKwXSw/image-1.png)

## Testing for Accuracy
[tests](../Sorting.test.js)

![testing](https://i.ibb.co/y0VWVBx/test.png)




