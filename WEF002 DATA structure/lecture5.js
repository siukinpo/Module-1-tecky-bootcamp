// closure

function accumulator() {
  let sum = 0;

  // return (num) => {
  //   sum = sum + num;
  //   return sum;
  // };

  function calculator(num) {
    sum += num;
    return sum;
  }
  return calculator;
  // 同上面其實係一樣的
}

const acc = accumulator(); //上面其實係無call到嗰function，而家呢到先係真係call緊

console.log(acc(4));
console.log(acc(9));
console.log(acc(12));

//////////////////////////////////////////////////////

function addToZero(number) {
  // sum borns
  let sum = 0;
  return sum + number;
  // sum dies after this line
}
console.log(addToZero(1222));
console.log(addToZero(333));
console.log(addToZero(3243));

// next page
