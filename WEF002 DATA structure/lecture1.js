//1. data type

let str = "dennis";

let age = 20;

let isTutor = true;

console.log(typeof str);
console.log(typeof age);
console.log(typeof isTutor);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. array and object

let students = ["peter", "john", "mary"];

let peter = {
  name: "peter",
  age: 23,
};

console.log(typeof students);
console.log(typeof peter);

console.log(typeof Array.isArray(students)); //check Array 要用啲特別啲嘅方法去check（boolean）
