// # print a multiplication table
// 10 * 1 = 10;

function multiplication(num) {
    for (let i = 1; i <= num; i++) {
        console.log(num + ' * ' + i + ' = ' + i * num);
    }
}
multiplication(10);