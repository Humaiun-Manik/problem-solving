// odd or even numbers between x to y using for loop

function oddEven(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            console.log(i + ' is even number');
        }
    }
}
oddEven(7, 30);