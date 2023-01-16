const bookList = document.querySelector('.bookList');
const form = document.querySelector('.formInput');
const [title, author] = document.form.elements;

const bookInput = {}; // empty object
let books = []; // empty array

if (localStorage.bookSaved) {
  books = JSON.parse(localStorage.getItem('bookSaved'));
}



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


