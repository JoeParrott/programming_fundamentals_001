function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstname, lastname) {
    return(firstname + " " + lastname)
}

function makeHalfPrice(price) {
    return(price * 0.5)
}



function countBooks(books) {
    return books.length
}

function isInStock(book) {
    if (book.quantity >= 1) {
        return true;
    }
}

function getTotalOrderPrice(price, quantityB) {
return ((price * 1.2) * quantityB)
}

module.exports = {
    addVAT, countBooks, getFullName, makeHalfPrice, isInStock, getTotalOrderPrice
};