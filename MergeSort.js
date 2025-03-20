//Merge Sort is a divide and conquer sorting algorithm that recursively divides the array into two halves, sorts them separately, and then merges the sorted halves to produce the final sorted array. It has a time complexity of O(n log n) in all cases.

// var numbers = [45, 23, 90, 20, 67, 10, 5];

// function mergeSort(arr) {   //
//     if (arr.length <= 1) {    //7<=1 
//         return arr; // Base case    
//     }
//     var mid = Math.floor(arr.length / 2);
//     var left = mergeSort(arr.slice(0, mid));
//     var right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }
// function merge(left, right) {
//     var sortedArray = [];
//     var i = 0, j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             sortedArray.push(left[i]);
//             i++;
//         }
//         else {
//             sortedArray.push(right[j]);
//             j++;
//         }
//     }
//     return sortedArray.concat(left.slice(i)).concat(right.slice(j));
// }

// console.log("Sorted Array:", mergeSort(numbers));



let arr = [8, 3, 5, 1, 7, 2, 6, 4];
let n = arr.length;
let tempArr = new Array(n);

for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
        let mid = Math.min(leftStart + size - 1, n - 1);
        let rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

        let i = leftStart, j = mid + 1, k = leftStart;

        while (i <= mid && j <= rightEnd) {
            if (arr[i] < arr[j]) {
                tempArr[k++] = arr[i++];
            } else {
                tempArr[k++] = arr[j++];
            }
        }

        while (i <= mid) tempArr[k++] = arr[i++];
        while (j <= rightEnd) tempArr[k++] = arr[j++];

        for (let x = leftStart; x <= rightEnd; x++) {
            arr[x] = tempArr[x];
        }
    }
}

console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

