// Difficults: Medium
// To Reverse the link list with any method
// Accepted output:
// 1. { value: 6, next: { value: 3, next: { value: 2, next: { value: 1, next: null } } } }
// 2. [6,3,2,1]
// 3. 6 -> 3 -> 2 -> 1 -> null
// 4. 6 -> 3 -> 2 -> 1

function cons(value, next) {
  return {
    value,
    next,
  };
}
// 1 -> 2 -> 3 -> 6 -> null
const original = cons(1, cons(2, cons(3, cons(6, null))));
console.dir(original, { depth: 4 });
// {value: 1, next: { value: 2, next: { value: 3, next: { value: 6, next: null } } }}



function reverseList(list){
let head = list
while(head.next){
    console.log('pass:' , head)
}



}