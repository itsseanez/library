let myLibrary = [];
let index=0;

function Book(author, title, pageNumbers,isRead) {
  // the constructor...
  this.author= author;
  this.title= `"${title}"`;
  this.pageNumbers= `${pageNumbers} pages`;
  this.isRead= isRead;
}

function addBookToLibrary(newAuthor, newTitle, newPageNumbers, newIsRead, index) {
  const newBook = new Book(newAuthor, newTitle, newPageNumbers, newIsRead, index);
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

      isRead.addEventListener('click', function() {
        myLibrary[i].toggleRead();
      });

      if(isRead.textContent === 'true') {
        isRead.textContent= "Read";
        isRead.classList.add('read');
      }
      else {
        isRead.textContent= "Not Read";
        isRead.classList.add('not-read');
      }

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

//Opens form to make new book
newBook.addEventListener('click', function() {
  overlay.style.display = 'block';
});

//Adds form input to new book in library
addBook.addEventListener('click', function() {
  const title= document.getElementById('title').value;
  const author= document.querySelector('#author').value;
  const pages= document.querySelector('#pages').value;
  const checkbox= document.querySelector('#is-read');
  const book= document.querySelectorAll(".book");
  let isRead;

  if (checkbox.checked) {
    isRead= true;
  }
  else {
    isRead=false;
  }

  addBookToLibrary(author, title, pages, isRead);
  overlay.style.display = 'none';
  clear(book);
  displayBooks();
  document.getElementById("myForm").reset();
  event.preventDefault();
});

Book.prototype.toggleRead = function() {
  this.isRead = !this.isRead;
};

const readStatus= document.querySelectorAll(".read, .not-read");



