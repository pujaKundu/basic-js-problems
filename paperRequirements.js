/*
    first book = 100 pages
    second book = 200 pages
    third book = 300 pages
    
    function paperRequirements takes 3 parameters (book quantity) ,returns total number of pages required
*/

function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    const firstBookPages = 100;
    const secondBookPages = 200;
    const thirdBookPages = 300;
    const totalPagesForFirstBook = firstBookPages * firstBookQuantity;
    const totalPagesForSecondBook = secondBookPages * secondBookQuantity;
    const totalPagesForThirdBook = thirdBookPages * thirdBookQuantity;
    const totalPagesRequired = totalPagesForFirstBook + totalPagesForSecondBook + totalPagesForThirdBook;
    return totalPagesRequired;
}

const totalPaper = paperRequirements(1, 5, 3);
console.log(totalPaper);