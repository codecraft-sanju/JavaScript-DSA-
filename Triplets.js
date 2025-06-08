function countTriplets(arr, target) {
  let n = arr.length;
  let count = 0;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        if (arr[left] === arr[right]) {
          let numElements = right - left + 1;
          count += (numElements * (numElements - 1)) / 2;
          break;
        } else {
          // Count duplicates of arr[left]
          let countLeft = 1;
          while (left + 1 < right && arr[left] === arr[left + 1]) {
            countLeft++;
            left++;
          }
          // Count duplicates of arr[right]
          let countRight = 1;
          while (right - 1 > left && arr[right] === arr[right - 1]) {
            countRight++;
            right--;
          }
          count += countLeft * countRight;
          left++;
          right--;
        }
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
}
let arr = [-3, -1, -1, 0, 1, 2];
let target = -2;

console.log(countTriplets(arr, target)); 

