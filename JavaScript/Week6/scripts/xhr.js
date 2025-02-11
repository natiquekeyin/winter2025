window.addEventListener("DOMContentLoaded", function () {
  let btn1 = this.document.querySelector("#btn1");

  let btn2 = this.document.querySelector("#btn2");

  let btn3 = this.document.querySelector("#btn3");

  let btn4 = this.document.querySelector("#btn4");
  btn1.addEventListener("click", loadFile);
  btn2.addEventListener("click", loadJSON);
  btn3.addEventListener("click", loadJSONS);

  btn4.addEventListener("click", loadAPI);
  function loadFile(e) {
    // 1.Create an XHR Object:

    const xhr = new XMLHttpRequest();

    // 2.COnfigure the request

    xhr.open("GET", "../data/test.txt");

    // 3.Action to take when request is completed...

    xhr.onload = function () {
      if (this.status === 200) {
        document.querySelector(
          "#output"
        ).innerHTML = `The data from file is: <br/>
        <em>${this.responseText}</em>`;
      } else {
        document.querySelector("#output").innerText = "Cannot read file";
      }
    };

    // 4.Execute the request
    xhr.send(); // I will forget this 1000 times...

    e.preventDefault();
  }

  function loadJSON(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "../data/user.json");

    xhr.onload = function () {
      if (this.status === 200) {
        let user = JSON.parse(this.responseText);
        document.querySelector(
          "#output"
        ).innerHTML = `ID: ${user.id} <br/>NAME: ${user.name} <br/>EMAIL:${user.email}<br/>`;
        // console.log(user.name);
      } else {
        console.log("Cnnot access json file");
      }
    };

    xhr.send();

    e.preventDefault();
  }

  function loadJSONS(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "../data/users.json");

    xhr.onload = function () {
      let output = "";
      if (this.status === 200) {
        let users = JSON.parse(this.responseText);

        users.forEach(function (user) {
          output += `<div><h2>${user.id}</h2><p>${user.name}</p><p>${user.email}</p></div>-------------`;
        });
      }

      document.querySelector("#output").innerHTML = output;
    };

    xhr.send();
    e.preventDefault();
  }

  function loadAPI(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://reqres.in/api/users");

    xhr.onload = function () {
      let output = "";
      if (this.status === 200) {
        let users = JSON.parse(this.responseText);

        users.data.forEach(function (user) {
          output += `<div class="box"><h3>${user.last_name}</h3><img src = "${user.avatar}" class="profile"/><p>${user.email}</p></div>`;
        });
      }

      document.querySelector("#output").innerHTML = output;
    };

    xhr.send();

    e.preventDefault();
  }
});
