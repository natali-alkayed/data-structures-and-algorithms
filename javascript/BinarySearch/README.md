# Array Binary Search
1.   Summary:
                The challenge is to implement a binary search algorithm in a sorted 1D array. The function BinarySearch takes in a sorted array and a search key as parameters and returns the index of the element in the array that is equal to the search key, or -1 if the element is not found.
2. Description:
                The BinarySearch function uses a binary search algorithm to find the target element in a sorted array. It starts by initializing two pointers, left and right, to the start and end of the array, respectively. The function then enters a loop where it calculates the middle index using the formula (left + right) / 2 and compares the value at the middle index with the search key. If the values are equal, the function returns the middle index. If the value at the middle index is less than the search key, the left pointer is updated to search in the right half of the array. If the value at the middle index is greater than the search key, the right pointer is updated to search in the left half of the array. The loop continues until the target element is found or the search space is exhausted. If the target element is not found, the function returns -1.
## Whiteboard Process
![Page 1](https://i.ibb.co/GFVWD0V/Whiteboard.jpg)
## Approach & Efficiency
The binary search algorithm follows a divide-and-conquer approach and has a time complexity of O(log n), where n is the number of elements in the array. This is because with each comparison, the search space is halved. The space complexity is O(1) as the algorithm only uses a constant amount of additional space for variables.
The time complexity of this approach is O(n), where n is the size of the array, as we iterate through each element exactly once. The space complexity is also O(n), as we create a new array to store the reversed elements.
## Solution
                function BinarySearch(arr, target) {
                let left = 0;
                let right = arr.length - 1;
                while (left <= right) {
                    let mid = Math.floor((left + right) / 2);
                    if (arr[mid] === target) {
                    return mid; // Found the target, return the index
                    } else if (arr[mid] < target) {
                    left = mid + 1; // Target is in the right half
                    } else {
                    right = mid - 1; // Target is in the left half
                    }
                }
                return -1; // Target was not found
                }
                // Example test cases using Jest
                describe('BinarySearch', () => {
                it('should return the correct index of the target element in the sorted array', () => {
                    expect(BinarySearch([4, 8, 15, 16, 23, 42], 15)).toBe(2);
                    expect(BinarySearch([-131, -82, 0, 27, 42, 68, 179], 42)).toBe(4);
                    expect(BinarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toBe(-1);
                    expect(BinarySearch([1, 2, 3, 5, 6, 7], 4)).toBe(-1);
                });
                it('should return -1 for an empty array', () => {
                    expect(BinarySearch([], 5)).toBe(-1);
                });
                it('should return -1 if the target element is not in the array', () => {
                    expect(BinarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
                    expect(BinarySearch([1, 3, 5, 7, 9], 10)).toBe(-1);
                });
                });