function checkMarkSix(selectedNum, bid) {
  const counter = selectedNum.reduce(
    (acc, num) => (num == bid[0] || num == bid[1] ? acc + 1 : acc),
    0
  );

  return counter == 2 ? true : false;
}

function quickPicks(selectedNum, bidCount) {
  let arr = [];
  for (let counter = 0; counter < bidCount; counter++) {
    // let first = Math.ceil(Math.random() * Math.max(...selectedNum)); // ...意思就係將嗰array拆散佢
    // let second;
    // do {
    //   second = Math.ceil(Math.random() * Math.max(...selectedNum));
    // } while (second == first);
    const _bid = [0, 0];
    const bid = _bid.reduce((bid, element, idx) => {
      if (idx == 0) {
        bid.push(Math.ceil(Math.random() * Math.max(...selectedNum)));
      } else {
        let newValue;
        do {
          newValue = Math.ceil(Math.random() * Math.max(...selectedNum));
          const result = bid.filter((element) => element == newValue);
          if (result.length == 0) {
            break;
          }
        } while (true);
        bid.push(newValue);
      }
      return bid;
    }, []);

    const win = checkMarkSix(selectedNum, bid);
    const result = {
      bid: bid,
      win: win,
    };
    // console.log(result);
    arr.push(result);
  }
  return arr;
}

console.log(quickPicks([1, 3, 5, 7, 9, 11], 1)); // returns: [{"bid": [1, 3], "win": true}]
console.log(quickPicks([1, 3, 5, 7, 9, 11], 3)); // returns: [{"bid": [2, 4], "win": false}, {"bid": [2, 5], "win": false}, {"bid": [7, 9], "win": true}]
