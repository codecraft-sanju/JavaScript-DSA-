let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length / 2; i++){
    let temp = arr[i]           //1=1
    arr[i] = arr[arr.length - 1-i];     //5-1-0=4    1=5
    arr[arr.length - 1-i]= temp;   
}
console.log(arr);

// let arr = [1, 2, 3, 4, 5]
// for (let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// function reverseArray(arr) {
//     let left = 0,
//         right = arr.length - 1;
//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr;
// }
// console.log(reverseArray(arr));
