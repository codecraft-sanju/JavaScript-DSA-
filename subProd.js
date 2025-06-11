function numSubarrayProductLessThanK(arr, k) {
  if (k <= 1) return 0;

  let product = 1;
  let left = 0;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];

    while (product >= k) {
      product /= arr[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

const arr = [10, 5, 2, 6];
const k = 100;
console.log('Count of subarrays:', numSubarrayProductLessThanK(arr, k));
