// # Find the negative or positive numbers from an array

function arraySum(nums) {
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if (element < 0) {
            console.log(element, ' is negative');
        }
    }
}
const numbers = [1, 2, -3, 4, 5, -6, 7, 8, -0.9, 10];
arraySum(numbers);