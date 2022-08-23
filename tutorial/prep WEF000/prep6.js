// Create a function checkMarkSix()
// checkMarkSix : we assume only two numbers are required for a bid
// and only one prize (win or lose)

// const capitalize = (word) => {
//   return word[0].toUpperCase() + word.slice(1);
// };
// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice();
// }
// console.log(capitalize("ann"));

const capitalize = (word) => word[0].toUpperCase() + word.slice[1];

function checkMarkSix(selectedNum, bid) {
  //if 2 numbers in bid can be found in selectedNum , return true
  //else return false;
  const results = selectedNum.filter(function (num) {
    return num == bid[0] || num == bid[1];
  });

  if (results.length == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true

function checkMarkSixFor(selectedNum, bid) {
  let counter = 0;
  for (let num of selectedNum) {
    if (num == bid[0] || num == bid[1]) {
      counter = counter + 1;
    }
  }
  if (counter == 2) {
    return "Yes";
  } else {
    return false;
  }
}

function checkMarkSixReduce(selectedNum, bid) {
  //if 2 numbers in bid can be found in selectedNum , return true
  //else return false;
  //   const counter = selectedNum.reduce(function (acc, num) {
  //     if (num == bid[0] || num == bid[1]) {
  //       return acc + 1;
  //     } else {
  //       return acc;
  //     }
  //   }, 0);
  const counter = selectedNum.reduce(
    (acc, num) => (num == bid[0] || num == bid[1] ? acc + 1 : acc),
    0
  );

  //   if (counter == 2) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return counter == 2 ? true : false;
}
console.log(checkMarkSixReduce([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
console.log(checkMarkSixReduce([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
console.log(checkMarkSixReduce([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true
