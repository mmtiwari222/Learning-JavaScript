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

let myString = "Madanmohan Tiwari";

myAnotherString = myString.valueOf(); // return the primitive value of the string object
console.log(myAnotherString);
// let userName = "Madanmohan Tiwari";
//  at() and charAt()
// console.log(userName.at(9)); // return character at given index // n
// console.log(userName.charAt(9)); // return character at given index // n
// console.log(userName.at(-1)); // return character at given index // i
// console.log(userName.charAt(userName.length - 1)); // return last character // i

// at() is new addition in js
// at() gives negative index value but charAt() can't

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// indexOf() and lastIndexOf()
let str = "My all code is undefined code also a code";
// console.log(str.indexOf("code")); // start from 0 index and return first index // 7
// console.log(str.lastIndexOf("code")); // start from last index and return last index // 37

// console.log(str.indexOf("code", 8)); // start from 8 index and return first index // 25
// console.log(str.lastIndexOf("code", 36)); // start from 36 index and return last index // 25

// console.log(str.indexOf("Hello")); // if string is not available return -1
// console.log(str.lastIndexOf("Hello")); // if string is not available return -1

// console.log(str.indexOf(" ")); // check first space from start
// console.log(str.lastIndexOf(" ")); // check first space from end

// console.log(str.indexOf("")); // check 0 index
// console.log(str.lastIndexOf("")); // check last index

// console.log(str.indexOf()); // check for undefined
// console.log(str.lastIndexOf()); // check for undefined

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// slice () and subString()
// (start, end) => end position is not included

const str2 = "Once upon a time I was a tall tree";
// console.log(str2.slice(5)); // given position to last position
// console.log(str2.substring(5)); // given position to last position

// console.log(str2.slice(5, 10)); // start include but last not include
// console.log(str2.substring(5, 10)); // start include but last not include

// console.log(str2.length);
// console.log(str2.slice(-4, -1)); // if negative value is given, it is treated as length + negative value
// console.log(str2.substring(-5, 1)); // if negative value is given, it is treated as 0

// if in slice() end position is smaller than start position, it returns empty string
// if in subString() end position is small than end position, it swaps the positions

// const str = "Madanmohan Tiwari";
// length of string using length property
// console.log(str.length);

// accessing the characters
// console.log(str[0]);
//accessing last character
// console.log(str[str.length - 1]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// trim() - remove white spaces from both ends
// let str = "    Hello World    ";
// console.log(str.trim()); // Hello World

// trimStart() and trimEnd()
// let str = "    Hello World    ";
// console.log(str.trimStart()); // Hello World
// console.log(str.trimEnd()); //     Hello World

// trimLeft() and trimRight()
// let str = "    Hello World    ";
// console.log(str.trimLeft()); // Hello World
// console.log(str.trimRight()); //     Hello World

// trimStart() and trimLeft() are same
// trimEnd() and trimRight() are same
// trim() is same as trimStart() and trimEnd()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// startsWith() and endsWith()
// let str = "Hello World";
// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("World")); // false
// console.log(str.endsWith("World")); // true
// console.log(str.endsWith("Hello")); // false

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// includes() - check if a string is present in another string
// let str = "Hello World";
// console.log(str.includes("Hello")); // true
// console.log(str.includes("World")); // true
// console.log(str.includes("hello")); // false
// console.log(str.includes("")); // true

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// repeat() - repeat a string
// let str = "Hello World";
// console.log(str.repeat(2)); // Hello WorldHello World

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// replace() - replace a string with another string
// let str = "Hello World";
// console.log(str.replace("World", "JavaScript")); // Hello JavaScript
// console.log(str.replace("world", "JavaScript")); // Hello World

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// split() - split a string into an array of substrings
// let str = "Hello World";
// console.log(str.split(" ")); // ["Hello", "World"]
// console.log(str.split("")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// toLowerCase() and toUpperCase()
// let str = "Hello World";
// console.log(str.toLowerCase()); // hello world
// console.log(str.toUpperCase()); // HELLO WORLD

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// concat() - concatenate two or more strings
// let str = "Hello";
// console.log(str.concat(" ", "World")); // Hello World

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// charCodeAt() - return the unicode of the character at a specified index
// let str = "Hello World";
// console.log(str.charCodeAt(0)); // 72

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// fromCharCode() - return the character at a specified unicode
// console.log(String.fromCharCode(72)); // H

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
