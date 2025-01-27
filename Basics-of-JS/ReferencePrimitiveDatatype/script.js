// Primitive Data Type -- Values are stored in the stack
// number, string, null, undefined, boolean, bigInt, symbol
// This means when we create a variable of primitive data type it takes a new space in memory like stack
// so if we assign let age = 20, means age contains 20,
// and again if we assign let newAge = age, means now neAge also contains 20 but it is the copy of the value of age not the reference of age
// and it takes a new memory space and then contain 20
// and if we change the value of newAge it can't change the value of original age variable
// it's only change the copied variable's value

// assign the values in the variables
let age = 20;
let newAge = age;
console.log(age, newAge); // age = 20, newAge = 20
// now change the value of newAge
newAge = 25;
console.log(age, newAge); // age = 20, newAge = 25

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Reference Data Type -- Values are stored in the heap
// object literals, arrays, functions
// This means when we create a variable of Reference data type, it refer a memory space like heap
// the variable stored in stack memory and it is reference of the value which is stored in heap memory
// and if we assign let person = {name: "Madanmohan", age: 20}, means person is the reference of the value which is stored in heap memory
// and if we assign let anotherPerson = person, means anotherPerson is also the reference of the value which is stored in heap memory
// so if we change the value of anotherPerson it will also change the value of person variable
// because both are the reference of the same value which is stored in heap memory

// assign the values
const person = {
  name: "Madanmohan",
  age: 20,
};

const anotherPerson = person;
console.log(person, anotherPerson); // person {name : "Madanmohan",age : 20 }
// anotherPerson { name : "Madanmohan", age : 20 }

// now change the value
anotherPerson.age = 25;
console.log(person, anotherPerson); // person { name : "Madanmohan",age : 25 }
// anotherPerson {name : "Madanmohan", age : 25 }
