// intro of objects

// singleton

// Object literals
const sym = Symbol("keys");
const JsUser = {
  name: "Madan",
  age: 22,
  location: "Chandigarh",
  email: "mm@gmail.com",
  isLoggedIn: false,
  [sym]: "sym1", // symbol
};

// access the values
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[sym]);
// console.log(typeof sym);

// modify the values
JsUser.name = "Shiya";
// console.log(JsUser.name);

// freze the value
// Object.freeze(JsUser);
JsUser.name = "Madan";
// console.log(JsUser.name);

// define a function in a Object

const myObj = {
  user: "mmtiwari",
  email: "mmtiwari@gmai.com",
  age: 20,
  location: "Chandigarh",
  myfun: function () {
    console.log(
      `The name of user is ${this.user}, the email of user is ${this.email}, the age of user is ${this.age} and the location of user is ${this.location}`
    );
  },
};
myObj.myfun();
