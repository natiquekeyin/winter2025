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

// function User(f, l, a) {
//   this.firstName = f;
//   this.lastName = l;
//   this.age = a;
//   this.isLoggedIn = false;
//   this.pref = { color: "Red", model: "Volvo" };
// }
// User.prototype.hobbies = ["Cycling", "Reading"];

// User.prototype.login = function () {
//   this.isLoggedIn = true;
// };

// User.prototype.logout = function () {
//   this.isLoggedIn = false;
// };

// let user1 = new User("a", "b", 21);
// // user1.login();

// console.log(user1.hobbies);

// function User(id, name) {
//   this.id = id;
//   this.name = name;
//   // this.toString = function () {
//   //   return `${this.name} (#${this.id})`;
//   // };
// }

// User.prototype.toString = function () {
//   return `${this.name} (#${this.id})`;
// };
// let user1 = new User(24, "Peter Mark");
// console.log(user1);
// console.log(user1.toString());

// function User(id, name) {
//   this.id = id;
//   this.name = name;

//   // private variable within User function, not attached to 'this'
//   // Normally this variable would go out of scope after user() completed..
//   //however, we will use a "closure function" to capture this scope...
//   let createdAt = Date.now();

//   this.playerAgeMS = function () {
//     let currentTime = Date.now();
//     // access 'createAt' in the parent scope, which we retain via this closure function
//     // calculate how many ms between createdAt and the current time.
//     return currentTime - createdAt + "ms";
//   };
// }
// let user1 = new User(1, "Alan Smith");
// console.log(user1.name);
// console.log(user1.playerAgeMS());

// JavaScript "class" and "object"
// Moder JS (ES5 ES6) is based on the idea of a class!

class User {
  id;
  name;
  // constructor function has the same name as class (NOT IN JS :)).. In JS, it is literllay called constructor...
  // constructor function is "AUTOMATICALLY" called when object of the class is created.

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  toString() {
    return `${this.name} (#${this.id})`;
  }
}
// let alan = new User(3, "Alan Smith"); // let objectname = new nameofClass(constructor) ( paramters paraters)
// console.log(alan);
// console.log(alan.toString());

class Student extends User {
  email;

  constructor(id, name, email) {
    // call the User() constructor to set the inherited properties
    super(id, name);
    this.email = email;
  }
  // override the toString method for a student...
  toString() {
    return `"${this.name}" <${this.email}>`;
  }
}

let student = new Student("1234", "John Hogan", "john@gmail.com");
console.log(student.id, student.name, student.email);
console.log(student.toString());

// Can you create a child class "Teacher" of the User class, that has salary field. and it overrides toString to show name of the teacher with salary like "Alan Smith - CAD 3000". As well as display all object of teacher...

class Teacher extends User {
  salary;

  constructor(id, name, salary) {
    super(id, name);
    this.salary = salary;
  }

  toString() {
    return `${this.name} - CAD ${this.salary}`;
  }
}

let teach1 = new Teacher("321", "Joey Thomas", "2343");
console.log(teach1);
console.log(teach1.toString());
