# Code Challenge: Class 02
## Insert and shift an array in middle at index
 1.   Summary:
                The problem requires implementing two functions: insertShiftArray and a stretch goal function for removing an element. The insertShiftArray function takes an array and a value as input and returns a new array with the value inserted at the middle index. The stretch goal function removes an element from the middle index and shifts the other elements in the array to fill the gap. The solution approach involves creating a new array, iterating over the original array, and making modifications at the middle index as required.
2. Description:
                The task is to write two functions, insertShiftArray and a stretch goal function, to perform array operations. The insertShiftArray function takes an array and a value as input and returns a new array with the value inserted at the middle index. The stretch goal function removes an element from the middle index and shifts the remaining elements to fill the gap.

## Whiteboard Process
![Page 1](https://i.ibb.co/m4NvyYV/Shift-Array.jpg)

## Approach & Efficiency
1. Calculate the middle index of the original array to determine where the new value should be inserted.
2. Create a new array with a length increased by 1 to accommodate the new value.
3. using for loop,copying elements from the original array to the new array while considering the middle index.
4. Insert the new value at the middle index in the new array.
5. Return the new array with the value inserted at the middle index.

## Solution
   function arrayInsertShift (arr,n)
{
    let middleIndex=Math.ceil(arr.length/2);
    let newArr=[];
    for(let i=0;i<arr.length+1;i++)
    {
        if(i < middleIndex)
        {
            newArr.push(arr[i]);
        }
        else if(i== middleIndex)
        {
           newArr.push(n);
        }
        else
        {
            newArr.push(arr[i-1])
        }
    }
    return newArr;
}

    describe('Testing challenge 1', () => {
    test('It should return a new array with the value in the midlle index', () => {
        expect(arrayInsertShift([1, 2, 3, 4, 5],6)).toStrictEqual([1,2,3,6,4,5]);
        expect(arrayInsertShift([42,8,15,23,42], 16)).toStrictEqual([42,8,15,16,23,42]);
    });
    });

