window.addEventListener("DOMContentLoaded", function () {
  // create a class Book that can later be used to create objects and use them...
  class Book {
    // constructor method- it is automatically/implicitly called when object of a class is created.

    constructor(t, i, a) {
      this.title = t;
      this.isbn = i;
      this.author = a;
    }

    addBookToList(book) {
      if (book.title === "" || book.isbn === "" || book.author === "") {
        this.showAlert("Please fill all fields", "error");
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td><td>${book.isbn}</td><td>${book.author}</td><td><button class="delete">Delete</button> </td>`;
        // console.log(row);
        // Step6: Now append this row to the table on HTML page...

        document.querySelector("#list").appendChild(row);
        this.clearFields();
        this.showAlert("Book successfully added", "success");
        // clearFields();
      }
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
        elemToDelete.parentNode.parentNode.remove();
      } else {
        showAlert("WRONG AREA CLICKED", "error");
      }
    }
  }

  let form = this.document.querySelector("#form1");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    // Now create an object of Book class and tpass three parameters there...

    let book = new Book(title, isbn, author);

    book.addBookToList(book);

    e.preventDefault();
  }

  this.document.querySelector("#area").addEventListener("click", handleDelete);

  function handleDelete(event) {
    let book = new Book();
    book.deleteBook(event.target);
    // WORK ON CORRECTION...
  }
});
