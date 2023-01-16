const bookList = document.querySelector('.bookList');
const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const addButton = document.querySelector('.add-btn');

const bookInput = {}; // empty object

// Add Book //
function addBook() {
  bookAuthor.addEventListener('change', () => {
    bookInput.author = bookAuthor.value;
  })
  
  bookTitle.addEventListener('change', () => {
    bookInput.title = bookTitle.value;
  })
}

addButton.addEventListener('click', addBook);


function Book(title, author) {
  this.title = title;
  this.author = author;
}


// Storage //
if (localStorage.bookSaved) {
  books = JSON.parse(localStorage.getItem('bookSaved'));
}


// Book Display Section //
const displayBooks = () => {
  bookList.innerHTML = '';
  books.map((book) => {
    const divBook = document.createElement('div');
    const titleBook = document.createElement('p');
    const authorBook = document.createElement('p');
    const delButton = document.createElement('button');
    const hrTag = document.createElement('hr');

    delButton.textContent = 'Remove';
    titleBook.textContent = book.title;
    authorBook.textContent = book.author;

    divBook.appendChild(titleBook);
    divBook.appendChild(authorBook);
    divBook.appendChild(delButton);
    divBook.appendChild(hrTag);

    bookList.appendChild(divBook);

    delButton.addEventListener('click', () => {
      removeBook(book);
      bookList.removeChild(divBook);
    });
    return bookList;
  });
};

displayBooks()

