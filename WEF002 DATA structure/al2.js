// closure

// function accumulator() {
//   let sum = 0;
//   return (num) => {
//     sum = sum + num;
//     return sum;
//   };
// }
// const acc = accumulator();
// console.log(acc(3));
// console.log(acc(5));
// console.log(acc(7));

let longPolicy = false; //呢句其實唔關事，有無都唔影響嗰function

function createPasswordChecker(longPolicy, differentCase) {
  return function (password) {
    if (longPolicy && password.length < 8) {
      return false;
    }
    if (differentCase && password.toUpperCase() === password) {
      return false;
    }
    return true;
  };
}

let passwordChecker = createPasswordChecker(true, true);
console.log(passwordChecker("123Abb"));
console.log(passwordChecker("12345678"));

//睇完之後明多咗好多！！！！！！！！！！！！！！！！
// closure
