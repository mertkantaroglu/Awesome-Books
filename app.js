const bookList = document.querySelector('.book-list');
const form = document.querySelector('.form-input');
const addButton = document.querySelector('.add-btn');

let books = [];

// Add Book
const booksAdd = (id, title, author) => {
  const newBook = document.createElement('div');

  newBook.innerHTML = `
    <p class='title'>${title}</p>
    <p class='author'>${author}</p>
    <hr />`;
  const delButton = document.createElement('button');
  delButton.textContent = 'Remove';
  newBook.insertBefore(delButton, newBook.lastElementChild);
  bookList.appendChild(newBook);

  // Remove Book
  delButton.addEventListener('click', () => {
    books = books.filter((books) => {
      if (books.title !== title && books.author !== author) {
        return true;
      }
      else {
        return false;
      }
    });
    // Remove from storage
    localStorage.setItem('books', JSON.stringify(books));
    newBook.remove();
  });
};

const addBook = (title, author) => {
  if (title !== '' || author !== '') {
    const id = Date.now();
    const bookObj = { id, title, author };
    books.push(bookObj);

    // Add book to storage
    localStorage.setItem('books', JSON.stringify(books));
    document.querySelector('.book-title').value = '';
    document.querySelector('.book-author').value = '';
    booksAdd(bookObj.id, bookObj.title, bookObj.author);
  }
};

const getBookFromStorage = JSON.parse(localStorage.getItem('books'));
if (getBookFromStorage) {
  books = getBookFromStorage;
}
books.forEach((book) => {
  booksAdd(book.id, book.title, book.author);
});

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('.book-title').value;
    const author = document.querySelector('.book-author').value;
    addBook(title, author);
  });
});