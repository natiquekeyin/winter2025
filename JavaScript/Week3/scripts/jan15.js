// Practice of string functions!

// let str = "The best sound i.n this world, is your name";

// function addPeriod(s) {
//   //   if (s.endsWith(".")) {
//   //     return s;
//   //   } else {
//   //     return `${s}.`;
//   //   }

//   //   return s.endsWith ? s : `${s}.`;

//   //   return s.includes(".") ? s : `${s}.`;

//   let lastPos = s.length - 1;
//   //   return s.charAt(lastPos) === "." ? s : `${s}.`;
//   return s.indexOf(".") === lastPos ? s : `${s}.`;
// }

// console.log(addPeriod("hello world"));
// console.log(addPeriod(str));

// let list = [1, 3, 6];
// make a new list by adding each element of list by 3..
// let listCopy = [];

// by using for loop
// for (let i = 0; i < list.length; i++) {
//   let element = list[i];
//   element += 3;
//   listCopy.push(element);
// }

// by using forEach()

// list.forEach(function (element) {
//   listCopy.push(element + 3);
// });

// by using map function... WE USE A LOT IN REACT

// let listCopy = list.map(function (element) {
//   return element + 3;
// });
// let list = [1, 4, 2, 4];

// let listCopy = list.map((element) => element + 3);
// map function takes a collection and applies the given function on each value of the collection and RETURNS a new array..
// filter method: filter methods filters out values that do not meet the given condition in callback function and just return those who are meeting the codition and creates a new array...

// console.log(listCopy);

// let list = [2, 1, 5, 6, 3, 9];
// let fList3 = [];
// let fList = list.filter((element) => element > 3);
// let fList2 = list.map((element) => element > 3);
// list.forEach((element) => {
//   if (element > 3) {
//     fList3.push(element);
//   }
// });
// console.log(list);
// console.log(fList);
// console.log(fList2);
// console.log(fList3);

// let arr = [1, 2, 4];
// let len = arr.length; //3
// let item0 = arr[0]; //0

// let list = [0, "1", "two", true];

// let position = [43.2344, -89.2223];

// // index notation to take value our of array
// // let lat = position[0];
// // let lng = position[1];

// // Destrcture:

// let [lat, lng] = position;

// let dateString = `16/01/2025`;
// let [day, month, year] = dateString.split("/");
// console.log(`The day is ${day}, month is ${month}, and year is ${year}`);

// let dateString = `16/01/2025`;
// let [, month, year] = dateString.split("/");

// let emailAddress = "jsmith@gmail.com";
// let [username, domain] = emailAddress.split("@");
// console.log(
//   `The username for ${emailAddress} is "${username}" and domain here is "${domain}"`
// );

// Iterating over String, Array and other collections:

// let s = "Hello Keyin College";
// for (let i = 0; i < s.length; i++) {
//   let char = s.charAt(i);
//   console.log(i, char);
// }

// let arr = [10, 20, 30, 40, 50];
// for (let i = 0; i < arr.length; i++) {
//   let elem = arr[i];
//   console.log(i, elem);
// }

// for..of given by ES6:
let s = "Hello Keyin";
for (let char of s) {
  console.log(char);
}

let arr = [10, 20, 30, 40, 50];
for (let elem of arr) {
  console.log(elem);
}
