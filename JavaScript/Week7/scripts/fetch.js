window.addEventListener("DOMContentLoaded", function () {
  //   console.log(this.fetch("../data/test.txt"));

  let btn1 = this.document.querySelector("#btn1");
  btn1.addEventListener("click", function () {
    fetch("../data/test.txt")
      .then((response) => {
        // console.log(response);
        if (!response.ok) {
          throw new Error("Not found - file may be deleted or not there");
        }
        return response.text();
      })
      .then((data) => {
        document.querySelector("#output").innerHTML = data;
      })
      .catch((error) => {
        document.querySelector(
          "#output"
        ).innerHTML = `File NOT found: ${error}`;
      });
  });

  let btn2 = this.document.querySelector("#btn2");
  btn2.addEventListener("click", function () {
    fetch("../data/user.json")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        document.querySelector(
          "#output"
        ).innerHTML = `<div><p>${data.name}</p><p>${data.email}</p><h1>${data.id}</h1></div>`;
      });
  });

  let btn3 = this.document.querySelector("#btn3");
  btn3.addEventListener("click", function () {
    fetch("../data/users.json")
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        data.forEach((item) => {
          document.querySelector(
            "#output"
          ).innerHTML += `${item.id} <br/>${item.name} <br/>${item.email} <br/>------------------------<br/>`;
        });
      });
  });

  let btn4 = this.document.querySelector("#btn4");
  btn4.addEventListener("click", function () {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        data.data.forEach((user) => {
          document.querySelector(
            "#output"
          ).innerHTML += `<div class="box"><h3>${user.id}</h3><p>${user.first_name}</p><p>${user.last_name}</p>
          <img src = "${user.avatar}" alt="profile" class="profile"/> <br/> <a href="${user.avatar}"> <button>More</button></a> </div>`;
        });
      });
  });
});
