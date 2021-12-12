function paperRequirments(humayun, munir, jhankar) {
    const humayunEachBook = 100;
    const munirEachBook = 200;
    const jhankarEachBook = 300;

    const humayunPageNumber = humayunEachBook * humayun;
    const munirPageNumber = munirEachBook * munir;
    const jhankarPageNumber = jhankarEachBook * jhankar;

    const totalPages = humayunPageNumber + munirPageNumber + jhankarPageNumber;
    return totalPages;
}
const result = paperRequirments(2, 1, 4);
console.log(result);