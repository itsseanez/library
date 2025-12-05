const myLibrary = [];

const Book = class {
    constructor(title, author, pages, isRead, id = crypto.randomUUID()) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.id = id;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }
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
        bookDiv.dataset.id = book.id;
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

        const isRead = document.createElement('button');
        isRead.textContent = book.isRead ? 'Read' : 'Not Read';
        if (book.isRead) {
            isRead.classList.add('clicked');
        }
        isRead.addEventListener('click', () => {
            book.toggleRead();
            isRead.textContent = book.isRead ? 'Read' : 'Not Read';
            isRead.classList.toggle('clicked');
        });
        bookDiv.appendChild(isRead);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
        deleteButton.addEventListener('click', () => {
            myLibrary.forEach((book, index) => {
                if (bookDiv.dataset.id === book.id) {
                    myLibrary.splice(index, 1);
                }
            });
            displayLibrary();
        });
        bookDiv.appendChild(deleteButton);

        libraryContainer.appendChild(bookDiv);
    });
}

// Example usage:
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
displayLibrary();

const dialog = document.querySelector("dialog");
const openDialogButton = document.getElementById('open-dialog-btn');
const closeDialogButton = document.getElementById("close-dialog-btn");
const submitBookButton = document.getElementById("submit-book-btn");

submitBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

    addBookToLibrary(title, author, pages, isRead);
    displayLibrary();
    dialog.close();
    document.getElementById("book-form").reset();
});

closeDialogButton.addEventListener('click', () => {
    dialog.close();
});

openDialogButton.addEventListener('click', () => {
    dialog.showModal();
});
