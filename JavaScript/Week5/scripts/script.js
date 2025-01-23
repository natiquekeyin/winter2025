// let user1 = {
//   id: 1,
//   firstName: "Alan",
//   lastName: "Smith",
//   age: 20,
//   isLoggedIn: true,
// };

// let user2 = {
//   id: 2,
//   firstName: "Bob",
//   lastName: "Reid",
//   age: 23,
//   isLoggedIn: false,
// };

// console.log(user1, user2);

// Constructor function:

function User(i, f, l) {
  this.id = i;
  this.lastName = l;
  this.firstName = f;
  this.department = "IT";
}
let user1 = new User(1, "Alan", "Smith");
let user2 = new User(2, "Bob", "Smith");
let user3 = new User(3, "Christina", "Lee");
console.log(user1, user2, user3);
