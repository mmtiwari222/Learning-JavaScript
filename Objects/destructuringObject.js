const course = {
  courseName: "JavaScript",
  price: 999,
  instructor: "Yotube",
};

// console.log(course.instructor);
// destructuring of object
const { instructor } = course;
// console.log(instructor);
const { instructor: ins } = course;
console.log(ins);
