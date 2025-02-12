// How to write promises in JS...

let p = new Promise(function (resolve, reject) {
  let a = 5 + 5; //something that is taking a long to execute...
  if (a === 10) {
    resolve("Promise Fulfilled!!");
  } else {
    reject("Promise failed/rejected");
  }
});

// How to call/use the promise

// if promise gets resolved... .then() will execute... if promise gets reject then .catch() part will execute...

p.then(function (message) {
  console.log("Success!", message);
}).catch(function (message) {
  console.log("Failed", message);
});

// fetch API....
