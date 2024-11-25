// Vriables are used to store data in JS
// Basically variables are containers which are use for contain the data

//Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't starts with a number
// - Can't use predifined word or keywords for naming a variable

// there are 3 types to declare a variable in js
// var, let, const

// 1. using var keyword
var userName = "mmtiwari";
console.log(userName);
// now we do not use this var keyword in our projects

// 2. using const keyword
const userEmailId = "mm@gmail.com";
console.log(userEmailId);
// once const define then the value of that variable can not change
// means, we can't reassign the value of that varibale because it becomes constant
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



