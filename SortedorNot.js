// let arr = [1, 2, 3, 8, 5];
// let isSorted = true; // Assume the array is sorted

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i + 1]) {
//     isSorted = false; // Found an unsorted pair
//     break; // No need to check further
//   }
// }

// if (isSorted) {
//   console.log('The array is sorted.');
// } else {
//   console.log('The array is not sorted.');
// }




let arr = [1, 2, 3, 9, 5, 6]
isSorted = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
}

if (isSorted) {
    console.log('sorted');
} else {
    console.log('not sorted');
}