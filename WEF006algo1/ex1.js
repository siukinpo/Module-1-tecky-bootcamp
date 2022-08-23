// Difficults: Easy - Medium
// To Remove all targeted number in the array
// *Special conditions*: You are NOT ALLOW create a new array / variables to store the values
// Means no arr.map or arr.filter ect is allow
// Tips: by arr.splice

// removeNum = number targeted to remove in array
function removeTargetNo(removeNum) {
  let arr = [1, 4, 7, 1, 6, 7, 7, 4];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == removeNum) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
}

removeTargetNo(1);
//Expected output: [ 4, 7, 6, 7, 7, 4 ]

removeTargetNo(7);
// Expected output: [ 1, 4, 1, 6, 4 ]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function removeTargetNo(removeNum) {
  let arr = [1, 4, 7, 1, 6, 7, 7, 4];
  for (let i = 0; i < arr.length; i++) {
    const idx = arr.findIndex(function (num) {
      //findIndex呢個功能就係find唔到就return -1
      return num == removeNum;
    });
    if (idx != -1) {
      arr.splice(idx, 1);
    }
  }
  console.log(arr);
}
removeTargetNo(1);
//Expected output: [ 4, 7, 6, 7, 7, 4 ]

removeTargetNo(7);
// Expected output: [ 1, 4, 1, 6, 4 ]
