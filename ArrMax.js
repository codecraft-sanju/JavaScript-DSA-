let numbers = [10, 25, 45, 2, 89, 14];
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {    //  25 > 10    45>25   2>45  89>45   14>89   max=89
      max = arr[i];         //  max=25     //max=45  //max=45  //max=89
    }
  }
  return max;
}
console.log(findMax(numbers));


// let arr = [45, 34, 89, 23]
// let max = Math.max(...arr)   //...arr (spread operator)
// console.log(max);





