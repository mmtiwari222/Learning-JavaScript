// all js deprecated string methods
//String.prototype.big()Deprecated
// String.prototype.blink()Deprecated
// String.prototype.bold()Deprecated
// String.prototype.anchor()Deprecated
// String.prototype.fixed()Deprecated
// String.prototype.fontcolor()Deprecated
// String.prototype.fontsize()Deprecated
// String.prototype.italics()Deprecated
// String.prototype.link()Deprecated
// String.prototype.strike()Deprecated
// String.prototype.sub()Deprecated
// String.prototype.substr()Deprecated
// String.prototype.small()
// String.prototype.sup()

// all String methods

// let userName = "Madanmohan Tiwari";
// // at() and charAt()
// console.log(userName.at(9));
// console.log(userName.charAt(9));
// console.log(userName.at(-1));
// console.log(userName.charAt(userName.length - 1));

// at() is new addition in js
// at() gives negative index value but charAt() can't

// indexOf() and lastIndexOf()
// let str = "My all code is undefined code also a code";
// console.log(str.indexOf("code"));// start from 0 Index
// console.log(str.lastIndexOf("code")); // srart from last index

// console.log(str.indexOf("code", 8)); // start from given position
// console.log(str.lastIndexOf("code", 36));

// console.log(str.indexOf("Hello")); // if string is not available return -1
// console.log(str.lastIndexOf("Hello"));

// console.log(str.indexOf(" ")); // chcek first space from start
// console.log(str.lastIndexOf(" ")); // check first space from end

// console.log(str.indexOf("")); // chcek 0 index
// console.log(str.lastIndexOf("")); // check last index

// console.log(str.indexOf()); // check undefined
// console.log(str.lastIndexOf());

// slice () and subString()
// (start, end) => end position is not included

const str2 = "Once upon a time I was a tall tree";
console.log(str2.slice(5)); // given position to last position
console.log(str2.substring(5));

console.log(str2.slice(5, 10)); // start include but last not include
console.log(str2.substring(5, 10));

console.log(str2.slice(-5, -1)); // return value from -5(count from last index)
console.log(str2.substring(-5, -1)); // take any -position as 0

// if in slice() end position is smaller than start position, it returns empty string
// if in subString() end position is small than end position, it swaps the positions
