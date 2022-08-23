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
//////////////////////////////////////////////////////////////////////////

// function getAllExercise(teacher) {
//   const exercises = [];
//   for (let student of teacher.students) {
//     for (let exercise of student.exercises) {
//       exercises.push(exercise);
//     }
//   }
//   return exercises;
// }
// console.log(getAllExercise(peter));
// // // 得到嘅嘢無名無姓，可唔可以push一個object入去？，下面
///////////////////////////////////////////////////////////////////////////////
// function getAllExercise(teacher) {
//   //*************************************************************************************
//   const exercises = [];
//   for (let student of teacher.students) {
//     for (let exercise of student.exercises) {
//       exercises.push({
//         name: student.name,
//         score: exercise.score,
//         date: exercise.date,
//       });
//     }
//   }
//   return exercises;
// }
// console.log(getAllExercise(peter));

////////////////////////////////////////////////////////////////////////////////////

// function getAllExercise(teacher) {
//   const exercises = [];
//   for (let student of peter.students) {
//     for (let exercise of student.exercises) {
//       exercises.push({ name: student.name, ...exercise });
//     }
//   }
//   return exercises;
// }
// console.log(getAllExercise(peter));
// // 因為我地要曬成個exercise入面嘅嘢，所以就可以咁

// ////////////////////////////////////////////////////////////////////////////////////////////////

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push("dennis");

// console.log(arr1);
// console.log(arr2);
// arr1 同 arr2 會係相同答案，因為佢地指著緊同一個Array

///////////////////////////////////////////////////////////////////////////////////////////////////
// arr2係一個新嘅Array，佢地而家指著緊兩個唔同嘅嘢，所以arr2唔會影響arr1

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push("dennis");

console.log(arr1);
console.log(arr2);
