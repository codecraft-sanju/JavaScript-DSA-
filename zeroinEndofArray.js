// function shiftZerosToRight(arr) {
//     let lastNonZeroIndex = 0; // 1

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !== 0) {
//             arr[lastNonZeroIndex] = arr[i];  //arr[0]=34
//             if (i != lastNonZeroIndex) { //0 != 0
//               arr[i] = 0; ////arr[i]=0
//             }
//             lastNonZeroIndex++;    //0 to 1
            
//         }
//     }
//     return arr;
// }
// let arr = [34, 0, 23, 45, 0, 2, 4];
// console.log(shiftZerosToRight(arr));



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

let arr = [34, 0, 8, 45, 0, 0, 4];
console.log(shiftZerosToRight(arr));


