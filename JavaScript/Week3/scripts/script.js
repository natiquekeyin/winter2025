// Write a function that displays "Yes" if a value is found in the list or displays "No" when the value is not found. Your funtion should accept any number of arguments, with first argument representing the value to be searched and rest of the values should be the list.
// findValue(2,1,2,3,4) // Yes
// findValue(2,1,5,3,4) // No

// Joseph's code:
// function findValue(value, ...list) {
//   let found = false;
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === value) {
//       found = true;
//       break;
//     }
//   }
//   console.log(found ? "Yes" : "No");
// }
// findValue(2, 1, 5, 2, 6);

// truthy and falsy?

// function updateScore(currentScore, value, bonus = 1) {
//   //   return bonus ? currentScore + value * bonus : currentScore + value;

//   //   bonus = bonus || 1;
//   //   return currentScore + value * (bonus || 1);
//   return currentScore + value * bonus;
// }

// updateScore(100, 5); // falsy
// updateScore(100, 10, 3); //truthy..

// let c = 10;
// function abc(a, b) {
//   c = a + b;
//   console.log(c);
// } // always returns "undefined"

// console.log(abc(3));

// let height = "124abcdef123";
// console.log(parseInt(height));
// let height = "124";
// console.log(isNaN(height));

// anynumber + undefined = NaN
// undefined + undefined = NaN

// f();

// function f() {
//   var y = x + 1;
//   var x = 2;
//   console.log(x, y);
// }
