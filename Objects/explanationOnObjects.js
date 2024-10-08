// const twitter = new Object();

const instaUser = {};

instaUser.id = "mmtiwari";
instaUser.name = "Madanmohan";
instaUser.age = 20;

// console.log(instaUser);

const regularUser = {
  email: "mm@gmail.com",
  fullname: {
    userName: {
      firstName: "Madanmohan",
      lastName: "Tiwari",
    },
  },
};

// console.log(regularUser.fullname.userName.firstName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "4",
};
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const newObject = {
  name: "mm",
  age: 20,
  location: "CHD",
};
console.log(Object.keys(newObject));
console.log(Object.values(newObject));
console.log(Object.entries(newObject));

console.log(newObject.hasOwnProperty("my"));
