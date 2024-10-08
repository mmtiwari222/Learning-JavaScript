// Vriables are used to store data in JS

// there are 3 types to declare a variable in js

// 1. using var keyword

var userName = "mmtiwari";
console.log(userName);

// now we do not use this var keyword in our projects

// 2. using const keyword

const userEmailId = "mm@gmail.com";
console.log(userEmailId);

// once const define the value of variable can not change
// we can not redeclare same varible in the same block

// 3. using let keyword

let userAge = 20;
console.log(userAge);
// we can change the value of variable
// we can not redeclare same variable in the same scope
// Example

let studentName = "Madanmohan";
console.log(studentName);
{
  let studentName = "Shiya";
  console.log(studentName);
}
// let studentName = "Vivek"; // SyntaxError: Identifier 'studentName' has already been declared
console.log(studentName);

// Const

const arr1 = ["madan", "mohan", "tiwari"];
const arr2 = arr1;
console.log(arr1, arr2);

// change the value of arr2

arr2[2] = "shukla";

console.log(arr2);
console.log(arr1);
