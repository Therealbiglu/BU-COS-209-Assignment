// Author: Daluchi Okafor
// 24/0552

// Array destructuring
const programmingLanguages = ["JavaScript", "Python", "C"];
const [first, second, third] = programmingLanguages;
console.log("My top language is", first);
console.log("Second choice is", second);

// Object destructuring
const student = { name: "Daluchi Okafor", level: 200, school: "Babcock University" };
const { name, level } = student;
console.log("Student:", name, "| Level:", level);
