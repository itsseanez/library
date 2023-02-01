let myLibrary = [];

function Book(author, title, pageNumbers, isRead) {
  // the constructor...
  this.author= author;
  this.title= title;
  this.pageNumbers= pageNumbers;
  this.isRead= isRead;
  return title;
}

function addBookToLibrary() {
  // do stuff here
}

//dispays books in array on page
function displayBooks() {
    for(let i=0; i< myLibrary.length; i++) {
      const mainContent= document.querySelector('#main-content');
      const book= document.createElement('div');
    }
}