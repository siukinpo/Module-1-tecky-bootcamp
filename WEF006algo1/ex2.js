// 2.
// Given function from tecky CMS

// 3 ->
function cons(value, next) {
  return {
    value,
    next,
  };
}
// 1 -> 2 -> 3 -> 6 -> null
const head = cons(1, cons(2, cons(3, cons(6, null))));
console.dir(head, { depth: 3 });

// Difficults: Medium
// To Reverse the link list with any method
// Accepted output:
// 1. { value: 6, next: { value: 3, next: { value: 2, next: { value: 1, next: null } } } }
// 2. [6,3,2,1]
// 3. 6 -> 3 -> 2 -> 1 -> null
// 4. 6 -> 3 -> 2 -> 1

// function reverseList(list) {
//   let newArr = [];
//   //   console.log(head);
//   let ptr = list;

//   while (ptr.next !== null) {
//     // console.log(ptr.value);
//     newArr.unshift(ptr.value);
//     ptr = ptr.next;
//   }
//   //   console.log(ptr.value);
//   newArr.unshift(ptr.value);
//   console.log(newArr);
// }

// // 6 -> 3 -> 2 -> 1 -> null
// reverseList(head);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reverseList(list) {
  let newArr = [];
  //   console.log(head);
  let ptr = list;

  while (ptr.next !== null) {
    // console.log(ptr.value);
    reverseHead = cons(ptr.value, cons(ptr.next));
    ptr = ptr.next;
  }
  //   console.log(ptr.value);
  console.log(reverseHead);
}

// 6 -> 3 -> 2 -> 1 -> null
reverseList(head);
