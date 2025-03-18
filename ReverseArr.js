// let arr = [1, 2, 3, 4, 5]
// for (let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
// }



let arr = [1, 2, 3, 4, 5];
function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]; 
        left++;
        right--;
    }
    return arr;
}


console.log(reverseArray(arr)); // [5, 4, 3, 2, 1]



