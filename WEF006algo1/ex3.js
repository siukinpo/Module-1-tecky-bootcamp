// Difficults: Medium
// Find a pair sequences that add together is the target input number
// Do not need to compare the whole array, just the number between left / right is ok

// If two pair found like targetNum = 5 and found 2 + 3 = Found with 2 + 5
// console.log "Found with 2 + 3"
// else if not found, console.log "Not Found"

// list: Input link list: 1 -> 2 -> 3 -> 6 -> null
// targetNum: target number that two elements of the link list will added together and match the target

// e.g. The Lisk 1 -> 2 -> 3 -> 6
// twoSumList(head, 9), since 3 + 6 = 9, hence console.log or return the "Found with 3 + 6"
// twoSumList(head, 7), since no two adjacent number added to be 7, hence console.log or return the "Not Found"
function cons(value, next) {
  return {
    value,
    next,
  };
}

// 1 -> 2 -> 3 -> 6 -> null
const head = cons(1, cons(2, cons(3, cons(6, null))));

// function twoSumList(list, targetNum) {
//   let newArr = [];
//   //   console.log(head);
//   let ptr = list;

//   while (ptr.next !== null) {
//     // console.log(ptr.value);
//     newArr.push(ptr.value);
//     ptr = ptr.next;
//   }
//   //   console.log(ptr.value);
//   newArr.push(ptr.value);
//   //   console.log(newArr);

//   for (let x of newArr) {
//     for (const y of newArr) {
//       if (x + y == targetNum) {
//         console.log(`Found with ${x} + ${y}`);
//         return;
//       }
//     }
//   }
// }

// // Accepted output:
// twoSumList(head, 9); // Found with 3 + 6
// twoSumList(head, 8); // Not Found
// twoSumList(head, 3); // Found with 1 + 2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function twoSumList(list, targetNum) {
  //   console.log(head);
  let ptr = list;
  while (ptr.next !== null) {
    // console.log(ptr.value);
    if (ptr.value + ptr.next.value == targetNum) {
      console.log(`Found with ${ptr.value} + ${ptr.next.value}`);
      return;
    }
    ptr = ptr.next;
  }
  console.log("Not Found");
}

// Accepted output:
twoSumList(head, 9); // Found with 3 + 6
twoSumList(head, 8); // Not Found
twoSumList(head, 3); // Found with 1 + 2
