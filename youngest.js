// Find the youngest person from an array of person object.

const students = [
    { name: 'Shakib', age: 29 },
    { name: 'jim', age: 22 },
    { name: 'Min', age: 35 },
    { name: 'Rasel', age: 23 },
    { name: 'Molin', age: 30 }
]

function youngestPerson(person) {
    let youngest = person[0];
    for (let i = 0; i < person.length; i++) {
        let element = person[i];
        if (youngest.age > element.age) {
            youngest = element;
        }
    }
    return youngest;
}
const result = youngestPerson(students);
console.log(result);