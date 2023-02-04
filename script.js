const book1 = new Book("Dazai osamu","no longer human", "125", true);

let myLibrary = [book1];

function Book(author, title, pageNumbers, isRead) {
  // the constructor...
  this.author= author;
  this.title= `"${title}"`;
  this.pageNumbers= `${pageNumbers} pages`;
  this.isRead= `Completed: ${isRead}`;
}

function addBookToLibrary() {
  
}

//dispays books in array on page
function displayBooks() {
    for(let i=0; i< myLibrary.length; i++) {
      const mainContent= document.querySelector('#main-content');
      const book= document.createElement('div');
      const title= document.createElement('p')
      const author= document.createElement('p');
      const pages= document.createElement('p');
      const isRead= document.createElement('p');
      
      title.textContent= myLibrary[i].title;
      author.textContent= myLibrary[i].author;
      pages.textContent= myLibrary[i].pageNumbers;
      isRead.textContent= myLibrary[i].isRead;
      
      book.classList.add('book');
      title.classList.add('text');
      author.classList.add('text');
      pages.classList.add('text');
      isRead.classList.add('text');

      book.appendChild(title);
      book.appendChild(author);
      book.appendChild(pages);
      book.appendChild(isRead)
      mainContent.appendChild(book);
    }
}

const newBook = document.querySelector("#new-book");
const overlay= document.querySelector('#overlay');
newBook.addEventListener('click', function() {
  overlay.style.display = 'block';
});

displayBooks();