function shiftZerosToRight(arr) {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[nonZeroIndex];
      arr[nonZeroIndex] = temp;
      nonZeroIndex++;
    }
  }

  return arr;
}

let arr = [34, 0, 23, 45, 0, 0, 4];
console.log(shiftZerosToRight(arr));
