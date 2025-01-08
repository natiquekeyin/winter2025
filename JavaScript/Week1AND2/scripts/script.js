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

let name = "Alan";
let message = "hello world";
let message1 = `back ticks`;

// console.log(message + "something" + name + message1);
console.log(
  `${message}  $ something ${name} this is another string ${message1}`
);
