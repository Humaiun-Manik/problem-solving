// # Function for centimeter to meter
// 1 m = 100 cm
// 1 cm = 1/100 m = 0.01 m
// 2 cm = (0.01 * 2)m = 0.02 m
// 0.01 * input

function centimeterToMeter(inputLength) {
    if (inputLength < 0) {
        return 'Length cannot be negative';
    }
    else {
        let meterLength = 0.01 * inputLength;
        // console.log(meterLength);
        return meterLength;
    }
}
const result = centimeterToMeter(-19);
console.log(result);