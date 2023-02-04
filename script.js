const book1 = new Book("Dazai osamu","no longer human", 125, true);

let myLibrary = [book1];

function Book(author, title, pageNumbers, isRead) {
  // the constructor...
  this.author= author;
  this.title= title;
  this.pageNumbers= pageNumbers;
  this.isRead= isRead;
}

function addBookToLibrary() {
  // do stuff here
}

//dispays books in array on page
function displayBooks() {
    for(let i=0; i< myLibrary.length; i++) {
      const mainContent= document.querySelector('#main-content');
      const book= document.createElement('div');
      const title= document.createElement('p')
      const author= document.createElement('p');
      const pages= document.createElement('p');
      
      title.textContent= myLibrary[i].title;
      author.textContent= myLibrary[i].author;
      pages.textContent= myLibrary[i].pageNumber;
      
      book.classList.add('book');
      title.classList.add('text');
      author.classList.add('text');
      pages.classList.add('text');
      book.appendChild(title);
      book.appendChild(author);
      book.appendChild(pages);
      mainContent.appendChild(book);
    }
}

displayBooks();