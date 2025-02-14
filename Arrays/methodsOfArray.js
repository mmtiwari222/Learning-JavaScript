// push() - add element at the end of array
const arr1 = [2, 4, 6, 8, 0];
arr1.push(10);
console.log(arr1);

// pop() - remove element from the end of array
const arr2 = [2, 4, 6, 8, 0];
arr2.pop();
console.log(arr2);

// unshift() - add element at the start of array
const arr3 = [2, 4, 6, 8];
arr3.unshift(0);
console.log(arr3);

// shift() - remove element from the start of array
const arr4 = [2, 4, 6, 8];
arr4.shift();
console.log(arr4);

// reverse() - reverse the array in place
const arr5 = [2, 4, 6, 8];
arr5.reverse();
console.log(arr5);

// includes() - check if an element is present in the array
const arr6 = [2, 4, 6, 8];
console.log(arr6.includes(6)); // true
console.log(arr6.includes(10)); // false

// indexOf() - return the first index at which the element is present
const arr7 = [2, 4, 6, 8];
console.log(arr7.indexOf(6)); // 2
console.log(arr7.indexOf(10)); // -1 - element is not present

// slice () - return a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// array.slice(startIndex, endIndex);
// startIndex: The index at which to begin extraction (inclusive). If omitted, it starts from 0.
// endIndex: The index at which to end extraction (exclusive). If omitted, it extracts until the end of the array.
//slice() does not modify the original array.
// Negative indices can be used to count from the end of the array.
const arr8 = [2, 4, 6, 8];
const arr9 = arr8.slice(1, 3);
console.log(arr9);

// splice() - add and/or remove elements from an array
// splice() modifies the original array.
// It returns an array of the removed elements.
// Negative indices can be used for startIndex.
const arr10 = [2, 4, 6, 8];
const arr11 = arr10.splice(1, 2); // remove 2 elements starting from index 1
console.log(arr11, arr10);
const arr12 = [2, 4, 6, 8];
const arr13 = arr12.splice(1, 0, 10); // add 10 at index 1
console.log(arr13, arr12);
const arr14 = [2, 4, 6, 8];
const arr15 = arr14.splice(1, 1, 10); // replace 4 with 10
console.log(arr15, arr14);
const arr16 = [2, 4, 6, 8];
const arr17 = arr16.splice(1, 2, 10, 12); // replace 4 and 6 with 10
console.log(arr17, arr16);

// Nested array
const arr18 = [2, 4, 6, 8];
const arr19 = [arr18, 10, 12];
console.log(arr19);

// concat() - merge two or more arrays
const arr20 = [2, 4, 6, 8];
const arr21 = [10, 12];
const arr22 = arr20.concat(arr21);
console.log(arr22);

// spread operator (..) - merge two or more arrays
const arr23 = [2, 4, 6, 8];
const arr24 = [10, 12];
const arr25 = [...arr23, ...arr24];
console.log(arr25);

// flat() - return a new array with all sub-array elements concatenated into it recursively up to the specified depth
const arr26 = [2, 4, [6, 8], 10, 12, [14, 16]];
const arr27 = arr26.flat();
console.log(arr27);

// static methods of array
// Array.isArray() - check if a value is an array
console.log(Array.isArray(arr26)); // true
// Array.from() - create a new array from an array-like or iterable object
console.log(Array.from("Hello World")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
// Array.of() - create a new array from a set of arguments
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]

// join() - convert an array to a string
const arr28 = [2, 4, 6, 8];
console.log(arr28.join("-")); // 2-4-6-8

// split() - convert a string to an array
const str = "2-4-6-8";
console.log(str.split("-")); // ["2", "4", "6", "8"]
