# Code Challenge: Class 01
## Array Reverse
1.   Summary:
                The task is to reverse an array without using any built-in methods. This can be achieved by creating a second array and using a for loop. The reversed array will be the result.
2. Description:
                Given an array, we want to reverse its order without using any built-in methods such as reverse(). Instead, we will create a second array and iterate through the original array using a for loop. In each iteration, we retrieve the element at the current index from the original array and append it to the second array. Finally, we return the reversed array.
## Whiteboard Process
![Page 1](https://i.ibb.co/GnB233s/Slide1.jpg)
![Page 2](https://i.ibb.co/L816SLC/Slide2.jpg)
## Approach & Efficiency
 1. Create an empty second array to store the reversed elements.
2. Use a for loop to iterate over the original array in reverse order.
3. Retrieve the element at the current index from the original array.
4. Append the retrieved element to the second array.
 5. Return the reversed array.
 The time complexity of this approach is O(n), where n is the size of the array, as we iterate through each element exactly once. The space complexity is also O(n), as we create a new array to store the reversed elements.
## Solution
    'use strict';
    const arrayReverse = (arr) => {
        let reversed = []; // Second array to store reversed elements
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); // Append element to the second array
    }
    return reversed; // Return the reversed array
    };
    describe('Testing challenge 1', () => {
    test('It should return a new array of reversed array', () => {
        expect(arrayReverse([1, 2, 3, 4, 5, 6])).toStrictEqual([6, 5, 4, 3, 2, 1]);
        expect(arrayReverse([89, 2354, 3546, 23, 10, -923, 823, -12])).toStrictEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
        expect(arrayReverse([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199])).toStrictEqual([199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]);
    });
    });