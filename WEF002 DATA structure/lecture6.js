function advancedAccumulator() {
  let sum = 0;

  return {
    reset: () => {
      sum = 0;
      return sum;
    },
    add: (num) => {
      sum = sum + num;
      return sum;
    },
    result: () => {
      return sum;
    },
  };
}

const acc = advancedAccumulator();
console.log(acc.add(1222));
console.log(acc.add(233));
// console.log(acc.add());
console.log(acc.result());

////////////////////////////////////////////////////////////////////////////////////////////////

function extremeAccumulator() {
  let sum = 0;

  let acc = {
    reset: () => {
      sum = 0;
      return acc;
    },
    add: (num) => {
      sum = sum + num;
      return acc;
    },
    result: () => {
      return sum;
    },
    minus: (num) => {
      sum = sum - num;
      return acc;
    },
  };
  return acc;
}

const extCal = extremeAccumulator();
console.log(extCal.add(333).add(444).minus(222).result());
