// DOMContentLoaded.. is an event..that actually makes sure that all the "elements of html" are properly loaded into the "DOM TREE"

// Regular expressions: ([some text])

window.addEventListener("DOMContentLoaded", function () {
  let form = this.document.querySelector("#form");

  form.addEventListener("submit", handleForm);

  function handleForm(event) {
    let name = document.querySelector("#name").value;

    let gender = "";
    if (document.querySelector("#male").checked) {
      gender = "Male";
    }
    if (document.querySelector("#female").checked) {
      gender = "Female";
    }
    if (document.querySelector("#other").checked) {
      gender = "Other";
    }

    let subjects = [];
    if (document.querySelector("#ui").checked) {
      subjects.push("UI");
    }

    if (document.querySelector("#frontend").checked) {
      subjects.push("Front End");
    }
    if (document.querySelector("#javascript").checked) {
      subjects.push("JavaScript");
    }

    let h1 = document.createElement("div");
    h1.innerHTML = `<h1>${name}</h1><strong>Gender</strong>: ${gender} <br/> <strong>Subjects:</strong>${subjects}`;

    document.querySelector("#output").appendChild(h1);

    let re = /[\(\)]/g;

    name = name.replace(re, " ").replace(/\s+/g, " ");
    // console.log(name);

    someFunction(name, gender);

    event.preventDefault();
  }

  function someFunction(n, g) {
    n.split(/\s+,\s+/g);
    console.log(n);
  }
});
