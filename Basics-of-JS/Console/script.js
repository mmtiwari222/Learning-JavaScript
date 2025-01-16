// Some methods of console object

// print anything on console
console.log("Print Anything");

// for showing any error on console
console.error("Here is Error");

// for showing any warning on console
console.warn("Here is Warning");

// for print anything in a form of table on console
console.table({ name: "Madanmohan", age: 22 });

// group something on console
console.group("A Simple Group");
console.log("Print Anything");
console.error("Here is Error");
console.warn("Here is Warning");
console.groupEnd();

// try to use css styles on direct console elements
const styles = "padding: 10px; background-color: white; color: black;";
console.log("%cHello World!", styles);

// for clearing console
// console.clear();

console.info("This is an information");

// for counting the number of times a particular line is executed
console.count("Hello");
