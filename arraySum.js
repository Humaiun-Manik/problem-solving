// # Print all the elements in an array then find the sum of all the elements.
// input: [1,2,3,4,5,6,7,8,9,10]
// output: 55;
// arrayName[index]
// number[4] = 5
// array indexing starts from 0
// arrayName.length -> it gives us the number of elements present in the array
// 1+2+3+......+10

function arraySum(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
    }
    return total;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arraySum(numbers);
console.log('from result ', result);
