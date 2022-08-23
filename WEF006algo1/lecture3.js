// function cons(value, next) {
//   return {
//     value,
//     next,
//   };
// }

// const head = cons(1, cons(2, cons(3, null))); // Now head connects to a linked list of item.
// // 1 -> 2 -> 3 -> null
// console.log(head);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function cons(value, next) {
//   return {
//     value,
//     next,
//     previous,
//   };
// }

// const head = cons(1, cons(2, cons(3, null))); // Now head connects to a linked list of item.
// // null <--> 1 <--> 2 <--> 3 <--> null
// console.log(head);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cons(value, next) {
  return {
    value,
    next,
  };
}

const head = cons(1, cons(2, cons(3, null))); // Now head connects to a linked list of item.
// 1 -> 2 -> 3 -> null

function walkList(head) {
  //let arr=[]
  console.log(head);
  let ptr = head;

  while (ptr.next !== null) {
    console.log(ptr.value);
    ptr = ptr.next;
  }
  console.log(ptr.value);
}

walkList(head);
