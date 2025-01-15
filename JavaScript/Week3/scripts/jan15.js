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

let list = [1, 3, 6];
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

let listCopy = list.map((element) => element + 3);

// map function takes a collection and applies the given function on each value of the collection and RETURNS a new array..
console.log(list);
console.log(listCopy);
