const cards = [
  ["Spade", "A"],
  ["Diamond", "J"],
  ["Club", "3"],
  ["Heart", "6"],
  ["Spade", "K"],
  ["Club", "2"],
  ["Heart", "Q"],
  ["Spade", "6"],
  ["Heart", "J"],
  ["Spade", "10"],
  ["Club", "4"],
  ["Diamond", "Q"],
  ["Diamond", "3"],
  ["Heart", "4"],
  ["Club", "7"],
];

console.log(
  cards.reduce(function (previous, current) {
    if (current[0] == "Spade") {
      return previous + 1;
    } else {
      return previous;
    }
  }, 0)
);
