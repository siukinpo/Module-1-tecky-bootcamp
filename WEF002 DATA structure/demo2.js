// Diamond < Club < Heart < Spade
// the ascending order of the ranks are:

// 2 < 3 < 4 < ... < J < Q < K < A
// Rank are always compared before suit.

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

function compareCard(cardA, cardB) {
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["Diamond", "Club", "Heart", "Spade"];
  const [suitA, rankA] = cardA;
  const [suitB, rankB] = cardB;
  const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB);
  if (ranksDiff !== 0) {
    return ranksDiff;
  } else {
    return suits.indexOf(suitA) - suits.indexOf(suitB);
  }
}

// Count the number of card which is of suit Spade. (Hints: using reduce)

const numberOfSpade = cards.reduce((count, card) => {
  if (card[0] === "Spade") {
    return count + 1; //1
  } else {
    return count; //1
  }
}, 0 /*count*/);
console.log(`Count the number of card which is suit Spade: ${numberOfSpade}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Remove all the card that is smaller than ["Club", "3"].
//=> Keep all the card >= ["Club" , "3"]

const largerThanClub3 = cards.filter(
  (card) => compareCard(card, ["Club", "3"]) >= 0
);
console.log(largerThanClub3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Count the number of card which is of suit Diamond or Heart and with the rank larger than or equal to J.
const countDiaHeartLargerJ = cards.reduce((count, card) => {
  if (card[0] === "Diamond" || card[0] === "Heart") {
    if (compareCard(card, ["Diamond", "J"]) >= 0) {
      return count + 1;
    } else {
      return count;
    }
  } else {
    return count;
  }
}, 0);

console.log(
  `Count the number of card which is of suit Diamond or Heart and with the rank larger than or equal to J: ${countDiaHeartLargerJ}`
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Replace all of the cards with suit Club to suit Diamond, keeping the same rank.
// 好明顯係map，因為我入10個係想佢出翻10個比我
// const club2Diamond = cards.map((card) => {
//   if (card[0] === "Club") {
//     return ["Diamond", card[1]];
//   }
//   return card;
// });

const club2Diamond = cards.map((card) =>
  card[0] === "Club" ? ["Diamond", card[1]] : card
);
//唔可以直接用...（好似話要object先用得？）

console.log(
  `Replace all of the cards with suit Club to suit Diamond, keeping the same rank`
);
console.log(club2Diamond);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Replace all of the cards with rank A to rank 2. Keeping the same suit.
// const rankA22 = cards.map((card) => {
//   if (card[1] === "A") {
//     return [card[0], "2"];
//   }
//   return card;
// });

const rankA22 = cards.map((card) => (card[1] === "A" ? [card[0], "2"] : card));

console.log(
  "Replace all of the cards with rank A to rank 2. Keeping the same suit"
);
console.log(rankA22);
