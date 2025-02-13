window.addEventListener("DOMContentLoaded", function () {
  // Store.displayBooks();
  // create a class Book that can later be used to create objects and use them...
  class Book {
    // constructor method- it is automatically/implicitly called when object of a class is created.

    constructor(t, i, a) {
      this.title = t;
      this.isbn = i;
      this.author = a;
    }

    addBookToList(book) {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${book.title}</td><td>${book.isbn}</td><td>${book.author}</td><td><button class="delete">Delete</button> </td>`;
      // console.log(row);
      // Step6: Now append this row to the table on HTML page...

      document.querySelector("#list").appendChild(row);

      this.clearFields();
    }

    clearFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#isbn").value = "";
      document.querySelector("#author").value = "";
    }

    showAlert(m, c) {
      let p = document.createElement("p");
      p.innerText = m;
      p.className = c;
      p.id = "box";
      document.querySelector("#notify").appendChild(p);
      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }

    deleteBook(elemToDelete) {
      if (elemToDelete.className === "delete") {
        let isbn =
          elemToDelete.parentElement.previousElementSibling
            .previousElementSibling.textContent;
        elemToDelete.parentElement.parentElement.remove();
        Store.removeBook(isbn);
        this.showAlert("Book Successfully deleted", "success");
      } else {
        this.showAlert("WRONG AREA CLICKED", "error");
      }
    }
  }
  let form = this.document.querySelector("#form1");
  form.addEventListener("submit", (evt) => {
    if (
      this.document.querySelector("#title").value != "" &&
      this.document.querySelector("#isbn").value != "" &&
      this.document.querySelector("#author").value != ""
    ) {
      handleSubmit();
    } else {
      let book = new Book();
      book.showAlert("ALl fields should be filled", "error");
    }

    evt.preventDefault();
  });

  //form.addEventListener("submit", handleSubmit);

  function handleSubmit() {
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    // Now create an object of Book class and tpass three parameters there...
    // [We cannot use call/use any method or property of a class WITHOUT creating its object]

    let book = new Book(title, isbn, author);

    book.addBookToList(book);
    book.showAlert("Book Successfully added", "success");
    Store.addBook(book);
    //e.preventDefault();
  }

  this.document.querySelector("#area").addEventListener("click", handleDelete);

  function handleDelete(event) {
    let book = new Book();
    book.deleteBook(event.target);
  }

  // Store books permanently until we remove them from "localStorage"[its an API in HTML that uses browser memory to save objects for the session]

  // The Store class will be used to parmanently store books in browser memory(localStorage)
  class Store {
    // to add new book to local storage
    static addBook(book) {
      let books = Store.getBooks();

      books.push(book);

      // books array is updated with new book added...but now we need to store the updated books back to the localStorage...

      localStorage.setItem("books", JSON.stringify(books));
    }

    static getBooks() {
      let books;
      if (localStorage.getItem("books") === null) {
        books = [];
      } else {
        // there is a books object in localStorage -

        books = JSON.parse(localStorage.getItem("books"));
      }

      return books;
    }

    static displayBooks() {
      let books = Store.getBooks();
      // each book should be dsiplayed on our web page...on the table...
      books.forEach((book) => {
        let objBook = new Book();
        objBook.addBookToList(book);
      });
    }

    static removeBook(isbn) {
      let books = Store.getBooks();
      books = books.filter((book) => book.isbn !== isbn);
      localStorage.setItem("books", JSON.stringify(books));
    }
  }

  Store.displayBooks();
});

// JSON.parse() to convert JSON data into normal "javaScript object".

// JSON.stringify() to convert normal javascript into JSON object...

// [If any method/property in class is declared as "static", it CAN BE accessed without creating the object of the class...]
// if something is "static", it becomes a class level thing rather then object level..

// Math.round();
// Math.sqrt();

// Read if there are already any books in localStorage...

// to read all books from the local storage

// to display the stored books from local storage on the page...

// to remvoe the books from local storage
