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

// console.log(user1.age, user2.isLoggedIn);

// let users = [
//   {
//     id: 1,
//     firstName: "Alan",
//     lastName: "Smith",
//     age: 20,
//     isLoggedIn: true,
//     hobbies: ["Reading", "Swimming"],
//     pref: { color: "Red", model: "Volvo" },
//     login: function () {
//       this.isLoggedIn = true;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//     },
//   },
//   {
//     id: 2,
//     firstName: "Bob",
//     lastName: "Smith",
//     age: 25,
//     isLoggedIn: false,
//     hobbies: ["Cycling", "Reading"],
//     pref: { color: "Red", model: "Volvo" },
//     login: function () {
//       this.isLoggedIn = true;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//     },
//   },
//   {
//     id: 3,
//     firstName: "Christina",
//     lastName: "Lee",
//     age: 18,
//     isLoggedIn: true,
//     hobbies: ["Reading", "Cycling"],
//     pref: { color: "Red", model: "Volvo" },
//     login: function () {
//       this.isLoggedIn = true;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//     },
//   },
// ];

// console.log(users[1].firstName);

// users[0].logout();
// users[1].login();
// users.forEach((user) => {
//   console.log(user);
// });

// Constructor function:

// function User(i, f, l) {
//   this.id = i;
//   this.lastName = l;
//   this.firstName = f;
//   this.department = "IT";
// }
// let user1 = new User(1, "Alan", "Smith");
// let user2 = new User(2, "Bob", "Smith");
// let user3 = new User(3, "Christina", "Lee");
// console.log(user1, user2, user3);

function User(f, l, a) {
  this.firstName = f;
  this.lastName = l;
  this.age = a;
  this.isLoggedIn = false;

  this.hobbies = ["Cycling", "Reading"];
  this.pref = { color: "Red", model: "Volvo" };
}

User.prototype.login = function () {
  this.isLoggedIn = true;
};

User.prototype.logout = function () {
  this.isLoggedIn = false;
};

let user1 = new User("a", "b", 21);
user1.login();
console.log(user1);
