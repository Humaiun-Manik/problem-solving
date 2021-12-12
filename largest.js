// # Find the largest/smallest element(number and string) from an array

/* function largestNumber(nums) {
    let largest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if (largest < element) {
            largest = element;
        }
    }
    return largest;
}
const numbers = [1, 2, 3, -4, 5, 6, -7, 8, 9, -10];
const result = largestNumber(numbers);
console.log(result); */


let instructors = ['Mahil', 'Fahad', 'Rasel', 'jim', 'Shakib', 'Rashed'];
function largestName(names) {
    let largest = names[0];
    for (let i = 0; i < names.length; i++) {
        let element = names[i];
        if (largest.length < element.length) {
            largest = element;
        }
    }
    return largest;
}
const result = largestName(instructors);
console.log(result);