// Async/Await functions:

window.addEventListener("DOMContentLoaded", function () {
  let btn1 = this.document.querySelector("#btn1");
  btn1.addEventListener("click", loadText);

  async function loadText() {
    try {
      let response = await fetch("../data/test.txt");

      if (!response.ok) {
        throw new Error("Not found");
      }
      let data = await response.text();
      // console.log(data);
      document.querySelector("#output").innerHTML = data;
    } catch (error) {
      console.log(error);
    }
  }

  let btn2 = this.document.querySelector("#btn2");

  btn2.addEventListener("click", loadJSON);

  async function loadJSON() {
    let response = await fetch("../data/user.json");
    let data = await response.json();
    document.querySelector("#output").innerHTML = `<div><h1>${data.name}</h1>
    <h2>${data.id}</h2></div>`;
  }

  let btn3 = this.document.querySelector("#btn3");
  btn3.addEventListener("click", loadJSONS);

  async function loadJSONS() {
    let response = await fetch("../data/users.json");

    let data = await response.json();

    data.forEach((user) => {
      document.querySelector("#output").innerHTML += `Hello ${user.name}<br/>`;
    });
  }
});

//   async function myFunction() {
//     return "Hello Keyin";
//   }
//   myFunction().then((message) => {
//     console.log(message);
//   });
//   async function fetchData() {
//     let p = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data Loaded");
//       }, 3000);
//     });
//     console.log("Fetching data...");
//     let result = await p;
//     console.log(result);
//   }
//   fetchData();
//   console.log("This should execute");
//   function getAge() {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(23), 2000);
//     });
//   }

//   getAge().then((num) => {
//     console.log(num);
//   });

//   async function getAsyncAge() {
//     let age = await getAge();
//     console.log(age + "from async");
//   }
//   getAsyncAge();
