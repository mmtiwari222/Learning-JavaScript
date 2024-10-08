// functions

// 1. Without parameter function
// function myName() {
//   console.log("Madanmohan");
// }
// myName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// addTwoNumbers(3, 4);

// hold values in variable

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// const result = addTwoNumbers(3, 4);
// console.log("Result:", result); // undefined => because return function do not print the value

// function addTwoNumbers(num1, num2) {
//   const result = num1 + num2;
//   return result;
//   console.log("Madanmohan"); // after return funtion code do not execute

// }
// const result = addTwoNumbers(3, 4);
// console.log("Result:", result);

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// const result = addTwoNumbers(3, 4);
// console.log("result is", result);

// function loginUserMsg(userName) {
//   return `${userName} just logged in`;
// }
// console.log(loginUserMsg("Madanmohan"));

// function isLoggedIn(userName) {
//   if (userName === undefined) {
//     console.log("please enter username");
//     return;
//   }
//   return `${userName} just logged in`;
// }
// console.log(isLoggedIn());

// function isLoggedIn(userName) {
//   if (!userName) {
//     console.log("please enter username");
//     return;
//   }
//   return `${userName} just logged in`;
// }
// console.log(isLoggedIn());

function calculateCartPrice(...num1) {
  return num1;
}
//console.log(calculateCartPrice(200, 400, 500));

const user = {
  userName: "mmtiwari",
  price: 999,
};

function handleObject(anyObject) {
  console.log(
    `userName is ${anyObject.userName} and price is ${anyObject.price}`
  );
}
// handleObject(user);

function handleObject(anyObject) {
  console.log(
    `userName is ${anyObject.userName} and price is ${anyObject.price}`
  );
}
// handleObject({
//   userName: "tiwari",
//   price: 299,
// });

const myArray = [3, 4, 6, 9];

function returnThirdValue(getArray) {
  return getArray[2];
}
// console.log(returnThirdValue(myArray));

function returnThirdValue(getArray) {
  return getArray[2];
}

console.log(returnThirdValue([2, 4, 6, 9]));
