var arr = [-93, -45, -12, -67, -89];
let max = -Infinity;
let secondmax = -Infinity;

function seconndLargest(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {  // If arr[i] is the new max
      secondmax = max; // Update second max
      max = arr[i]; // Update max
    } else if (arr[i] > secondmax && arr[i] != max) { // Check for second max
      secondmax = arr[i];
    }
  }
  return secondmax; // Return the second largest number
}

console.log(seconndLargest(arr)); // Output: 89
