// # A function that will revers a string as a parameter and revers it.
// string.length = length of the string

function reverseString(text) {
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        let element = text[i];
        reverse = reverse + element;
    }
    console.log(reverse);
}
reverseString('Bangladesh is a beautiful country');