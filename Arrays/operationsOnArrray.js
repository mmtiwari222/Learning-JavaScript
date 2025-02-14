// operations on arrays

// access any elements by index
const arr1 = [2, 4, 6, 8];
console.log(arr1[3]);

//length of array
console.log(arr1.length);

// access first element
const arr2 = [1, 3, 5, 7];
console.log(arr2[0]);

// access last element
const arr3 = [2, 4, 6, 8, 10];
console.log(arr3[arr3.length - 1]);

// modify element
const arr4 = [2, 3, 6, 8];
arr4[1] = 4;
console.log(arr4);

// increase and decrease length
const arr5 = [1, 2, 3, 4, 5];
arr5.length = 7; // increase
console.log(arr5);
arr5.length = 2;
console.log(arr5);

// add element at the end of array
const arr6 = ["apple", "banana", "orange"];
arr6[arr6.length] = "mango"
console.log(arr6)
