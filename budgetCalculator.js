function paperRequirments(humayun, munir, jhankar) {
    const humayunEachBook = 100;
    const munirEachBook = 200;
    const jhankarEachBook = 300;

    if (humayun < 0 || munir < 0 || jhankar < 0) {
        return 'Nagetive number is not valid';
    }
    else if (humayun % 1 !== 0 || munir % 1 !== 0 || jhankar % 1 !== 0) {
        return 'Number is not valid';
    }
    else {
        const humayunPageNumber = humayunEachBook * humayun;
        const munirPageNumber = munirEachBook * munir;
        const jhankarPageNumber = jhankarEachBook * jhankar;

        const totalPages = humayunPageNumber + munirPageNumber + jhankarPageNumber;
        return totalPages;
    }
}
const result = paperRequirments(2, 1, 4);
console.log(result);