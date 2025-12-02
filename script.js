const myLibrary = [];

function Book(title, author, pages, isRead, id = crypto.randomUUID()) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
}

function addBookToLibrary(title, author, pages, isRead) {
    //take params, create a book then store it in the array
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}
