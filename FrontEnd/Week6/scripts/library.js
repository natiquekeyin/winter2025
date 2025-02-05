window.addEventListener("DOMContentLoaded", function () {
  // Step1: We need to grab the form and attach an event with it fo "Submit"

  let form = this.document.querySelector("#form1");

  form.addEventListener("submit", handleSubmit);

  //   Step2: Define handleSubmit function
  function handleSubmit(event) {
    // Step3: Grab the values from three text boxes(title, author,isbn)...

    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    // Step4: Now pass these values to a function called "addBookToList()" and that function will make a row and append it on html.

    addBookToList(title, isbn, author); //let's define the funciton after handleSubmit body

    event.preventDefault();
  }

  function addBookToList(t, i, a) {
    // console.log(t, i, a); //let's test the funciton with values...
    // Step5: now create a new row and insert the above t,i and a into tds and then append that row on HTML.....

    if (t === "" || i === "" || a === "") {
      showAlert("Please fill all fields", "error");
    } else {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${t}</td><td>${i}</td><td>${a}</td><td><button class="delete">Delete</button> </td>`;
      // console.log(row);
      // Step6: Now append this row to the table on HTML page...

      document.querySelector("#list").appendChild(row);
      showAlert("Book successfully added", "success");
      clearFields();
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#isbn").value = "";
    document.querySelector("#author").value = "";
  }

  //   showAlert() will create a new paragraph inside "notify" and put this message there...
  function showAlert(m, c) {
    let p = document.createElement("p");
    p.innerText = m;
    p.className = c;
    p.id = "box";
    document.querySelector("#notify").appendChild(p);
    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 3000);
  }
});
