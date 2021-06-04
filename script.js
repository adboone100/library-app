let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return `${title}, ${author}, ${pages}, ${read}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "JRR Tolkein", "523", "Yes");
const harryPotter = new Book("Harry Potter", "JK Rowling", "234", "Yes");
console.log(theHobbit.info());

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

console.log(myLibrary);