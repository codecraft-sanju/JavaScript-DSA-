let arr = [45, 23, 90, 20]
for (let i = 0; i < arr.length-1; i++){
  let MinimumIndex = i;
  for (let j = i + 1; j < arr.length; j++){
    if (arr[j] < arr[MinimumIndex]) {
      MinimumIndex = j;
   }
  }
  let temp = arr[i]
  arr[i] = arr[MinimumIndex]
  arr[MinimumIndex] = temp
}

console.log(arr);