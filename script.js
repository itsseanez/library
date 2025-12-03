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

function displayLibrary() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = ''; // Clear previous content

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = document.createElement('h3');
        title.textContent = book.title;
        bookDiv.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookDiv.appendChild(pages);

        const isRead = document.createElement('p');
        isRead.textContent = `Read: ${book.isRead ? 'Yes' : 'No'}`;
        bookDiv.appendChild(isRead);

        libraryContainer.appendChild(bookDiv);
    });
}

// Example usage:
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
displayLibrary();
