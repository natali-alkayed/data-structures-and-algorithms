# Code Challenge: Class 02
## Insert and shift an array in middle at index
 Description:
              The insertShiftArray function takes an array and a value as input and returns a new array with the value inserted at the middle index. It performs this operation without using any built-in methods provided by the programming language.

## Whiteboard Process
![Page 1](https://i.ibb.co/GnB233s/Slide1.jpg)
![Page 2](https://i.ibb.co/L816SLC/Slide2.jpg)

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