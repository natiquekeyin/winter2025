// // // function abc() {
// // //   if (x > 10) {
// // //   }
// // // }
// // // var x = 10;
// // // var age = 20;
// // // var name = "Alan";
// // // var abc1 = function () {}; //unique with js
// // // // in ES5 ES6... we use let more than var..

// // // // var and let .. are used interchangeably.. but they are different in scope! var:function level scope, let:block-level

// // // console.log("Hello Keyin");
// // // console.log(2 + 2);
// // // consle.log("hello again");
// // // console.log("hello after error");
// // // // alert("Hello world");

// // function abc() {
// //   {
// //     age = 10;
// //     age1 = 20;
// //     // age1 = 30;
// //     console.log(age1);
// //   }

// //   console.log(age);
// //   console.log(age1);
// // }

// // var console = 10;

// // abc();

// // int x ; cannot store anything but an integer in x now.. IN OTHER LANGUAGES...
// var x = null;
// console.log(typeof x);
// x = 10;
// console.log(typeof x);
// x = "Alan";
// console.log(typeof x);
// x = true;
// console.log(typeof x);
// x = function foo() {}; //Object data type..
// console.log(typeof x);
// x = [1, 2, 3];
// console.log(typeof x);

// let x = 10;
// x += 10;
// x -= 5;
// x;
// let x = 10;
// //x = x + 1; //add 1 to x and store back in x
// // x += 1;

// x++; //increments x by 1
// x--; //decrement x by 1

// let x = 1;
// console.log(x++); //internally it become two
// console.log(++x);
// console.log(--x);

// let nums = [];
// let i = 0;
// nums[i++] = 10; //0 index
// nums[++i] = 20; //1 index
// console.log(nums);

// let age = "20";
// if (age === 20) {
//   console.log("Hello");
// } else {
//   console.log("Bye");
// }

// coercion.. js actually converts either side and makes comparison
// almost always us === instead of == to save from coercion...

// Binary operators :  + two operands
//  x+5
// Unary operators:  1 operand... ++x, --, !x,

// Ternary operator???
// 3 operands...

//  condition ? value_if_true : value_if_false;
//  ? :

// let age = 10;
// let message;
// // age > 18 ? console.log("Hello") : console.log("Bye");
// // console.log(age > 18 ? "Hello" : "Bye");
// message = age > 18 ? "Hello" : "Bye";
// console.log(message);
//IMPORTANT ... and REACT uses it abundantly...

// let name = "Bob";
// let message = "hello world";
// let message1 = `back ticks`;

// console.log(message + "something" + name + message1);
// if (name === "Bob") {
//   console.log(
//     `${message}  $ something ${name} this is another string ${message1}`
//   );
// }

// for(initialization(statement1); condition(statement2); increment/decrement(statement3)){ ......}

// for (let i = 0; i < 10; ++i) {
//   // console.log(i);
// }

// let a = 0;
// console.log(++a);
// console.log(a);// will output change..

// for (let i = 0; i < 3; i++) {
//   for (let j = i; j < 3; j++) {
//     console.log(`${i},${j}`);
//   }
// }

// function myFunction() {}
// // myFunction is a function that does not take any parameters and does not return anything...

// function myFunction2(a, b) {}
// // myFunction2 is a function that accepts 2 paramters (a,b) but does not return anything...

// function myFunction3(a, b) {
//   return a + b;
// }
// // myFunction3 takes 2 paramters and returns ONE value.....
// If a funciton does not return anything explicitly... it returns "undefined" by default...

// function add(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// console.log(add(5, 4));

// Function declarations:

// function noop() {}
// function square(a) {
//   return a * a;
// }
// function add(a, b) {
//   return a + b;
// }

// Function Expressions:[only JS allows this]
// the function here is called "ANONYMOUS FUNCTION"
// let noop = function () {};
// let square = function (a) {
//   return a * a;
// };
// let add = function (a, b) {
//   return a + b;
// };

// Arrow functions

// let noop = () => {};
// // let square = (a) => {
// //   return a;
// // };

// let square = (a) => a;
// // let add = (a, b) => {
// //   return a + b;
// // };
// let add = (a, b) => a + b;

// Parameters and arguments
// function abc() {}
// function abc1(a) {}
// function abc2(a, b, c, d, e, f) {}

// function log(a) {
//   console.log(a);
// }

// log("correct");
// log("also", "correct");
// log();

// arguments
// function log(a) {
//   console.log(arguments.length, a, arguments[0]);
// }
// log("correct"); //1 correct correct
// log("also", "correct");
// log();

// function sum() {
//   const count = arguments.length;
//   let total = 0;
//   for (let i = 0; i < count; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sum(1));  //1
// console.log(sum(1, 2)); //3
// console.log(sum(1, 2, 3, 4)); //10

// January 14,2025: Lecture starts here...
// ()=>{ }, ? :, ...
// Parameters and ...(rest operator)

// ... gives me a chance to give name to the argument array (by default: arguments, BUT we have used ...numbers, means we want the argument array to have a name of numbers)
function sum(a, b, ...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
