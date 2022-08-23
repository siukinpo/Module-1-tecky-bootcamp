// let arr = ["a", "b", "c", "d"];
// console.log(arr[1]);
// console.log((arr[1] = arr[2]));
// console.log((arr[2] = arr[3]));
// arr.length = 3;

// console.log(arr);

// Array remove ////////////////////////////////////////////////////////////////////////

function removeTargetNo(removeNum) {
  let arr = [1, 4, 7, 1, 6, 7, 7, 4];
  console.log("remove", removeNum, "from", arr, "...");
  // your code
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === removeNum) {
      removeByIndex(arr, i);
      // next step : check "previously next number"
      // which is "currently current number"
      i--;
    }
  }
  console.log(arr);
  console.log("=".repeat(32));
}

function removeByValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      removeByIndex(arr, i);
    }
  }
}

function removeByIndex(array, index) {
  for (let i = index; i + 1 < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length--;
}

removeTargetNo(1);
//Expected output: [ 4, 7, 6, 7, 7, 4 ]

removeTargetNo(7);
// Expected output: [ 1, 4, 1, 6, 4 ]
