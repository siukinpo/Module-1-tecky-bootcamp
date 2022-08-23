const peter = {
  name: "Peter",
  age: 50,
  students: [
    {
      name: "Andy",
      age: 20,
      exercises: [{ score: 60, date: new Date("2018-10-01") }],
    },
    {
      name: "Bob",
      age: 23,
      exercises: [
        { score: 76, date: new Date("2019-01-05") },
        { score: 55, date: new Date("2018-11-05") },
      ],
    },
    {
      name: "Charlie",
      age: 25,
      exercises: [{ score: 60, date: new Date("2019-01-05") }],
    },
  ],
};

/////////////////////////////////////////////////////////////////////////////

// console.log("dennis is handsome".split(" "));

// let str = "abc";

// console.log(["John", "Peter", "Ben", "Andy"].join());
// console.log(typeof ["John", "Peter", "Ben", "Andy"].join());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numArr = [12, 43, 675, 87];

console.log(numArr.map((value) => value * 10));
//////////////////////////////////////////////////////////////////////////
function callbackfn(value) {
  return value * 100;
}
//1. finalResult = []
//2. for loop original array
//3. call callback function
//4. push ele into finalResult
//5. return back to me
console.log(numArr.map(callbackfn));
/////////////////////////////////////////////////////////////////////////
// 12*0 , 43*1 , 675*2 ,...
console.log(numArr.map((value, index) => value * index));

////////////////////////////////////////////////////////////////////////

console.log(numArr.filter((ele) => ele % 2 == 0));
// [12]

////////////////////////////////////////////////////////////////////////
let students = peter.students;

console.log(students.filter((student) => student.name === "Andy"));

//[ { name: 'Andy', age: 20, exercises: [ [Object] ] } ]
////////////////////////////////////////////////////////////////////////

let studentFound = students.filter((student) => student.name == "Dennis");

console.log(studentFound);

if (studentFound) {
  console.log("I found dennis");
}
// I found dennis 因爲就算studentFound係一個空嘅array，佢都會當係有嘢，所以要用下面嗰方法
/////////////////////////////////////////////////

if (studentFound.length > 0) {
  console.log("I found dennis");
}
/////////////////////////////////////////////////////////////////////////////////////////////////
console.log(
  numArr.reduce((previous, current) => {
    return previous + current;
  }, 10000)
);

let strArr = ["dennis", "beeno", "andrew"];
// strArr.reduce();

//forEach and map are very similar

/////////////////////////////////////////////////////////////////////////////////////////
console.log(numArr.map((num) => num ** 2));
console.log(numArr.map((num) => num * num).filter((num) => num % 2 === 1));
