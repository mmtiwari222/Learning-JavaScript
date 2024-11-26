// Primitive Data Type -- Values are stored in the stack
// number, string, null, undefined, boolean, bigInt, symbol
// This means when we create a variable of primitive data type it takes a new space in memory like stack
// so if we assign let age = 20, menas age contains 20,
// and again if we assign let newAge = age, means now neAge also contains 20
// but it takes a new memory space and then contain 20
// and if we change the value of newAge it can't change the value of original age variable
// it's only change on the copy varibale's value

// assign the values in the varibales
let age = 20;
let newAge = age;
console.log(age, newAge); // age = 20, newAge = 20
// now change the value of newAge
newAge = 25;
console.log(age, newAge); // age = 20, newAge = 25

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Reference Data Type -- Values are stored in the heap
// object literals, arrays, functions
// This means when we create a varibale of Refrence data type, it refer a memory space like heap
// the varible create a stack memory but that actyally refers that value stored in heap memory
// so if we change the value of copy variabe it also change the orignal varibale's value
// beacuse the copy varibale also refers that same value.

// assign the values
const person = {
  name: "Madanmohan",
  age: 20,
};

const anotherPerson = person;
console.log(person, anotherPerson); // person = name : "Madanmohan",age : 20
// anotherPerson = name : "Madanmohan", age : 20

// now change the value
anotherPerson.age = 25;
console.log(person, anotherPerson); // person = name : "Madanmohan",age : 20
// anotherPerson = name : "Madanmohan", age : 20
