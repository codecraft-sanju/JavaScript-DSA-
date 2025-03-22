let arr = [8, 3, 9, 7, 2, 6];

function mergeTwoSortedArr(arr1, arr2) {
  let i = 0;
  let j = 0;
  let ans = [];
  let n = arr1.length;
  let m = arr2.length;

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  while (j < m) {
    ans.push(arr2[j]);
    j++;
  }
  while (i < n) {
    ans.push(arr1[i]);
    i++;
  }
  return ans;
}

function mergeSort(arr, l, r) {      //example [2]      
    // base case
    if (l == r) {       //0==0  
        let res = [];    //
        res.push(arr[l]);  //res=[2]
        return res;
    } else {                                   // [8, 3, 9, 7, 2, 6]
        let mid = Math.floor((l + r) / 2);         //0+(6-1)/2   5/2   2    [8,3,9] [7,2,6]
        let leftSortedArr = mergeSort(arr, l, mid);  //[8,3,9,7,2,6],0,2      
        let rightSortedArr = mergeSort(arr, mid + 1, r);//[8,3,9,7,2,6],2+1,6
        let fullSortedArr = mergeTwoSortedArr(leftSortedArr, rightSortedArr);
        return fullSortedArr;
    }
}

function sort(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}

let result = sort(arr);
console.log(result);
