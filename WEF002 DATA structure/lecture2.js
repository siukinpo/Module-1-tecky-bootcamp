// exercise: obj -> array -> obj -> array

const peter = {
  name: "Peter",
  age: 50,
  students: [
    { name: "Andy", age: 20 },
    { name: "Bob", age: 23 },
    {
      name: "Charlie",
      age: 25,
      exercises: [
        { score: 60, date: new Date("2019-01-05") },
        { score: 50, date: new Date("2019-01-05") },
        { score: 40, date: new Date("2019-01-05") },
      ],
    },
  ],
};

///////////////////////////////////////////////////////////////////////
// 1. depth

// console.log(peter);
// console.dir(peter, { depth: 6 });     //要用console.dir

// console.log(peter.students);
// console.log(peter["students"]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. for loop

// for (let student of peter.students) {
//   console.log (student);
// }

// let students = peter.students;
// for (let i = 0; i < students.length; i++) {
//   console.log (i);
//   console.log (students[i]);
// }

// 佢只係show翻點用while loop做
// let index = 0;
// while (index < students.length) {
//   console.log (students[index]);
//   index++;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// two-layer for loop
let students = peter.students;

// for (let student of students) {
//   console.log(student.exercises);
// }
// //因爲頭兩位同學係無exercises，所以頭兩位就會出undefined

// for (let student of students) {
//   if (student.exercises) {
//     console.log(student.exercises);
//   }
// }

// 用if的話，嗰同學有exercises佢先會出true然後show翻嗰exercises比你

// for (let student of students) {
//   if (student.exercises) {
//     for (let exercise of student.exercises) {
//       console.log("hihi");
//       console.log(exercise);
//     }
//   }
// }

// // 同上面嘅分別就係，可能你中途會想加啲嘢/改啲嘅，上面就做唔到
// /////////////////////////////////////////////////////////////////////////////////////////////////////

// let studentFound;
// for (let student of students) {
//   if (student.name === "Andy") {
//     studentFound = student;
//   }
// }
// console.log(studentFound);

// //////////////////////////////////////////////////////////////////
//function
function findStudent(name) {
  for (let student of students) {
    if (student.name === name) {
      studentFound = student;
    }
  }
  return studentFound;
}
console.log(findStudent("Charlie"));
console.log(findStudent("Andy"));
console.log(findStudent("Bob"));
//如果無加“”，就會變undefined
