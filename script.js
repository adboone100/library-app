let myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.info = function (){
        return `${title}, ${author}, ${read}`;
    }
}




function addBookToLibrary(book) {
    const table = document.getElementById("table-container");
    
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookStatus = document.createElement('div');
    const bookRemove = document.createElement('div');

    bookTitle.classList.add("table");
    bookAuthor.classList.add("table");
    bookStatus.classList.add("table");
    bookRemove.classList.add("table");
    
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;

    const bookStatusBtn = document.createElement('button');
    if(book.read == "Read"){
        bookStatusBtn.classList.add('read-btn');
    }
    else if(book.read == "Not Read"){
        bookStatusBtn.classList.add('unread-btn');
    }

    else if(book.read == "Reading"){
        bookStatusBtn.classList.add('progress-btn');
    }
    bookStatusBtn.textContent = book.read;
    bookStatus.appendChild(bookStatusBtn);
    statusButtonListener(bookStatusBtn);

    const bookRemoveBtn = document.createElement('button');
    bookRemoveBtn.textContent = "Delete";
    bookRemoveBtn.classList.add('delete-btn');
    bookRemove.appendChild(bookRemoveBtn);
    deleteButtonListener(bookRemoveBtn);

    table.appendChild(bookTitle);
    table.appendChild(bookAuthor);
    table.appendChild(bookStatus);
    table.appendChild(bookRemove);
   
    
    myLibrary.push(book);  
     
    
}

const theHobbit = new Book("The Hobbit", "JRR Tolkein", "Not Read");
const harryPotter = new Book("Harry Potter", "JK Rowling", "Reading");

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);




const form = document.getElementById("form");

form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('book-text');
    const author = document.getElementById('author-text');
    const status = document.getElementById('status-input');
    
    if(name.value == '' || author.value == ''){
        form.reset();
        return;
    }  

    let submitBook = new Book(name.value, author.value, status.value);
    addBookToLibrary(submitBook);
    
    form.reset();

})
  

function deleteButtonListener(button){
    button.addEventListener('click', event => {
       
        const deleteButton = event.path[1];
        const statusButton = deleteButton.previousElementSibling;
        const author = statusButton.previousElementSibling;
        const title = author.previousElementSibling;

        for (const prop in myLibrary){
            if(title.textContent == myLibrary[prop].title){
                myLibrary.splice(prop, 1);
            }
        }

        deleteButton.remove();
        statusButton.remove();
        author.remove();
        title.remove();
    })
}

function statusButtonListener(button){
    button.addEventListener('click', event => {
       if(event.target.className == "read-btn"){
           event.target.className = "unread-btn";
           event.target.textContent = "Not Read";
       }
       else if (event.target.className == "progress-btn"){
           event.target.className = "read-btn";
           event.target.textContent = "Read";
       }
       else if (event.target.className == "unread-btn"){
           event.target.className = "progress-btn";
           event.target.textContent = "Reading";
       }
    })
}
