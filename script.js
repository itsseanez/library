let myLibrary = [];

function Book(author, title, pageNumbers, isRead) {
  // the constructor...
  this.author= author;
  this.title= `"${title}"`;
  this.pageNumbers= `${pageNumbers} pages`;
  this.isRead= `Completed: ${isRead}`;
}

function addBookToLibrary(newAuthor, newTitle, newPageNumbers, newIsRead) {
  const newBook = new Book(newAuthor, newTitle, newPageNumbers, newIsRead);
  myLibrary.push(newBook);
}

function clear(element) {
  for(let i=element.length-1; i>=0; i--) {
      element[i].remove();
  }
}

//dispays books in array on page
function displayBooks() {
    for(let i=0; i< myLibrary.length; i++) {
      const mainContent= document.querySelector('#main-content');
      const book= document.createElement('div');
      const title= document.createElement('p')
      const author= document.createElement('p');
      const pages= document.createElement('p');
      const isRead= document.createElement('BUTTON');
      
      title.textContent= myLibrary[i].title;
      author.textContent= myLibrary[i].author;
      pages.textContent= myLibrary[i].pageNumbers;
      isRead.textContent= myLibrary[i].isRead;
      
      book.classList.add('book');
      title.classList.add('text');
      author.classList.add('text');
      pages.classList.add('text');
      isRead.classList.add('read');

      book.appendChild(title);
      book.appendChild(author);
      book.appendChild(pages);
      book.appendChild(isRead)
      mainContent.appendChild(book);
    }
}

const newBook = document.querySelector("#new-book");
const overlay= document.querySelector('#overlay');
const addBook= document.querySelector("#add-book");

newBook.addEventListener('click', function() {
  overlay.style.display = 'block';
});

addBook.addEventListener('click', function() {
  const title= document.getElementById('title').value;
  const author= document.querySelector('#author').value;
  const pages= document.querySelector('#pages').value;
  const isRead= document.querySelector('#is-read').value;
  const book= document.querySelectorAll(".book");

  addBookToLibrary(author, title, pages, isRead);
  overlay.style.display = 'none';
  clear(book);
  displayBooks();
  document.getElementById("myForm").reset();
  event.preventDefault();
});

