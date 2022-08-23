let str = "tommy" + " hi";
//[t,o,m,m,y, h,i]
console.log(str);
console.log(str[0]);

let tom = {
  name: "tom",
  age: 999,
};

let may = tom;
console.log(tom);
may.name = "May";
console.log(tom);
console.log(may);

console.log(tom == may);

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

let obj = {
  name: "tom",
  familyMembers: ["may", "peter", "Dennis"],
};

// let fm = obj["familyMembers"];

// fm.push("reemo");

// console.log(obj);
// console.log(fm);
let fm = [...obj.familyMembers]; //clone 咗嗰新嘅比佢
fm.push("reemo");

console.log(obj);
console.log(fm);

// object 都同上，都係大家指住同一樣嘢
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let obj2 = {
  class: "3a",
  name: "ha",
  no: 45,
  role: {
    isClassLeader: false,
    isRowLeader: true,
    award: ["1", 3, false],
  },
};

// let obj3 = {
//   ...obj2,
// };
// obj3.role.isClassLeader = true;
// console.log(obj2);
// console.log(obj3);

//...係for shadow copy , not for deep copy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(JSON.stringify(obj2));
let obj3 = JSON.parse(JSON.stringify(obj2));
obj3.role.isClassLeader = true;
console.log(obj2);
console.log(obj3);

console.log(Object.keys(obj2));
console.log(Object.values(obj2));
