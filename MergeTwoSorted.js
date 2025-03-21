let arr1 = [5,6,8,23,45,67,78,99];
let arr2 = [10,12,56,65,89,90];

function mergeTwoSortedArr(arr1,arr2){

let i = 0;
let j = 0;
let ans = [];
let n = arr1.length;
let m = arr2.length;

while(i<n && j<m){
    if(arr1[i] < arr2[j]){
        ans.push(arr1[i]);
        i++;     
    }else{
        ans.push(arr2[j]);
        j++;
    }
}

while(j<m){
    ans.push(arr2[j]);
    j++;
}
while(i<n){
    ans.push(arr1[i]);
    i++
}
return ans;
}
let result = mergeTwoSortedArr(arr1,arr2)
console.log(result)

