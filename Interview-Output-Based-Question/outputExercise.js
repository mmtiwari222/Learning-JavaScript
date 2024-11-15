// addition of number and Strings
// let x = 10;
// let y = " 10";
// console.log(x + y);

// let a = "10 ";
// let b = 10;
// let c = 10;
// console.log(a + b + c);

// let p = 10;
// let q = 10;
// let r = " 10";
// console.log(p + q + r);

// Sub of number and String
// let a = 10;
// let b = "100";
// console.log(a - b);

// let p = "100";
// let q = 10;
// console.log(p - q);

// let x = 20;
// let y = "20";
// let z = "10";
// console.log(x + y - z);

// console.log(NaN == 0);
// console.log(NaN >= 0, NaN <= 0, NaN == NaN, NaN === NaN);

// console.log(typeof NaN);

// console.log(null > 0, null < 0, null <= 0, null >= 0, null == 0, null == null);

// console.log([] < {});
// console.log(String([] + 2 + "2"));

const obj1 = {
  name: "Madan",
};
const obj2 = {
  name: "Madan",
};
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

let a = 5;
let b = a++;
let c = a + b;
// console.log(a, b, c);

const myArray = [1, 2, 3, 4, 5];
const myArray2 = myArray;
// console.log(myArray2);

myArray2[4] = 0;
// console.log(...myArray2, ...myArray);

const myObj = {
  user: "Madan",
  age: 20,
  id: 4,
  city: "CHD",
};
// console.log(myObj);
const myObj2 = myObj;
// console.log(myObj2);

myObj2.age = 22;
// console.log(myObj, myObj2);

let obj = {
  user: "Ram",
  age: 20,
};
const arr = [obj];
console.log(arr);
obj = null;
// This reassigns the variable obj to null. However, this does not affect the array arr because arr still holds a reference to the original object in memory. Reassigning obj simply points the variable to null but doesn't modify the object itself or the reference stored in the array.
console.log(arr);
