let sum = 0;
function accumulator(num) {
  sum += num;
  return sum;
}

console.log(accumulator(4));
console.log(accumulator(8));
